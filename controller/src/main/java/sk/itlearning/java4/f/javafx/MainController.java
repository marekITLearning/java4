package sk.itlearning.java4.f.javafx;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import sk.itlearning.java4.a.xml.CatalogLoader;
import sk.itlearning.java4.book.Book;
import sk.itlearning.java4.book.Catalog;

public class MainController {
	
	ObservableList<Book> data;
	Catalog c;
	
	@FXML
	TableView<Book> xmlDataTable;
	
	@FXML
	TableColumn<Book, String> c1;

	@FXML
	TableColumn<Book, String> c2;
	
	@FXML
	public void updateTable() {
		c = CatalogLoader.getFullCatagalog(CatalogLoader.class.getResourceAsStream("book.xml"));
		data = FXCollections.observableArrayList(c.getBook());	
		xmlDataTable.setItems(data);
		c1.setCellValueFactory(new PropertyValueFactory<>("author"));
		c2.setCellValueFactory(new PropertyValueFactory<>("title"));
	}

	public void remove() {
		Book b = xmlDataTable.getSelectionModel().getSelectedItem();
		data.remove(b);
	}
	
	public void save() throws FileNotFoundException {
		c.getBook().removeAll(c.getBook());
		data.forEach(d -> c.getBook().add(d));
		CatalogLoader.saveCatagalog(c, new FileOutputStream(new File("book.xml")));
	}

}
