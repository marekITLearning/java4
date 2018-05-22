package sk.itlearning.java4.f.javafx;

import java.net.URL;
import java.util.Comparator;
import java.util.ResourceBundle;

import javafx.collections.FXCollections;
import javafx.collections.ListChangeListener;
import javafx.collections.ObservableList;
import javafx.concurrent.Task;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import sk.itlearning.java4.a.xml.CatalogLoader;
import sk.itlearning.java4.book.Book;
import sk.itlearning.java4.book.Catalog;

public class MainController implements Initializable {
	
	private Catalog catalog = null;
	private ObservableList<Book> observableList = FXCollections.observableArrayList();

    @FXML
    private Button btnLoad;

    @FXML
    private Button btnForceAdd;
    
    @FXML
    private TableView<Book> tableBooks;

    @FXML
    private TableColumn<Book, String> colAuthor;

    @FXML
    private TableColumn<Book, String> colTitle;

    @FXML
    private TableColumn<Book, String> colGenre;

    @FXML
    private TableColumn<Book, Double> colPrice;

    @FXML
    void onBtnForceAdd(ActionEvent event) {
    	if(observableList!=null) {
    		Book book = new Book();
    		book.setAuthor("AAA Force");
    		book.setTitle("Added");
    		book.setGenre("Row");
    		book.setPrice(100);
    		observableList.add(0, book);
    	}
    }

    @FXML
    void onBtnLoad(ActionEvent event) {
    	Thread th = new Thread(getTaskDoInBackground());
    	th.setDaemon(true);
    	th.start();
    }
    
    
	@FXML
	void onBtnSave(ActionEvent event) {
		boolean saveCatalog = CatalogLoader.saveCatalog(catalog);
		Alert info = new Alert(AlertType.INFORMATION);
		info.setTitle("Save");
		info.setHeaderText(null);
		if (saveCatalog) {		
			info.setContentText("Saved succesfully - book.xml inside root of view module");			
		} else {			
			info.setContentText("Save failed");
		}
		info.showAndWait();
    }
    
    @FXML
    void onBtnClear(ActionEvent event) {
    	observableList.clear();
    }
    
	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		colAuthor.setCellValueFactory(new PropertyValueFactory<>("Author"));
		colTitle.setCellValueFactory(new PropertyValueFactory<>("Title"));
		colGenre.setCellValueFactory(new PropertyValueFactory<>("Genre"));
		colPrice.setCellValueFactory(new PropertyValueFactory<>("Price"));		
		
		//change listener 
		observableList.addListener(observableListChangeListener);
		
		//Set Items
		tableBooks.setItems(observableList);
	}
	
	ListChangeListener<Book> observableListChangeListener = new ListChangeListener<Book>() {
	      @Override
	      public void onChanged(ListChangeListener.Change change) {
	    	  tableBooks.refresh();
	    	  Alert info = new Alert(AlertType.INFORMATION);
	    	  info.setTitle("Force Add");
	    	  info.setHeaderText(null);
	    	  change.next();
	    	  if(change.wasAdded()) {
	    		  info.setContentText("New Book Added Succesfully (table refreshed)");
	    	  }
	    	  if(change.wasRemoved()) {
	    		  info.setContentText("Clear Successfull");
	    	  }
	    	  info.showAndWait();    	    	  
	      }
	    };
	
	private Task getTaskDoInBackground() {
		return new Task<ObservableList<Book>>() {	
	
			@Override
			protected ObservableList<Book> call() throws Exception {
				catalog = CatalogLoader.loadFullCatalog();
				//remove listener because a lot of books
				observableList.removeListener(observableListChangeListener);
		    	observableList.addAll(FXCollections.observableList(catalog.getBook()));
		    	observableList.sort(new Comparator<Book>() {
	//comparator sort books by author name
					@Override
					public int compare(Book obj1, Book obj2) {
						 if (obj1 == null) {
						        return -1;
						    }
						    if (obj2 == null) {
						        return 1;
						    }
						    if (obj1.getAuthor().equals( obj2.getAuthor() )) {
						        return 0;
						    }
						    return obj1.getAuthor().compareTo(obj2.getAuthor());
					}
				});	    	
		    	tableBooks.refresh();
		    	observableList.addListener(observableListChangeListener);
				return observableList;
			}
			
		};
	}

}
