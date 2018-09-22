package sk.itlearning.java4.f.javafx;

import javafx.beans.property.SimpleStringProperty;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.fxml.FXML;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import sk.itlearning.java4.a.xml.CatalogLoader;
import sk.itlearning.java4.book.Catalog;

public class MainController {
	
	ObservableList<TableBook> data = FXCollections.observableArrayList();

	@FXML
	TableView<TableBook> xmlDataTable;
	
	@FXML
	TableColumn<TableBook, String> c1;

	@FXML
	TableColumn<TableBook, String> c2;
	
	@FXML
	public void updateTable() {
		Catalog c = CatalogLoader.getFullCatagalog(CatalogLoader.class.getResourceAsStream("book.xml"));
		
		data.clear();
				
		c.getBook().stream().forEach(e -> data.add(new TableBook(e.getAuthor(), e.getTitle())));

		xmlDataTable.setItems(data);
		
		c1.setCellValueFactory(new PropertyValueFactory<>("author"));
		c2.setCellValueFactory(new PropertyValueFactory<>("title"));
	}

	public void removeFirst() {
		data.remove(0);
		data.add(new TableBook("Marek", String.valueOf(data.size())));
	}

	public static class TableBook {
		private SimpleStringProperty author;
		private SimpleStringProperty title;

		public TableBook(String author, String title) {
			this.author = new SimpleStringProperty(author);
			this.title = new SimpleStringProperty(title);
		}
		
		public String getAuthor() {
			return author.get();
		}

		public void setAuthor(String author) {
			this.author.set(author);
		}

		public String getTitle() {
			return title.get();
		}

		public void setTitle(String title) {
			this.title.set(title);
		}
	}

}
