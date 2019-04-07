package sk.digitalsystems.dsutil.workspace.wg;

import java.io.File;
import java.nio.file.Paths;
import java.util.Optional;

import javafx.application.Application;
import javafx.event.EventHandler;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.scene.image.Image;
import javafx.scene.input.DragEvent;
import javafx.scene.input.Dragboard;
import javafx.scene.input.TransferMode;
import javafx.stage.Stage;

public class MainView extends Application {

	@Override
	public void start(Stage primaryStage) throws Exception {

		FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("main_view_layout.fxml"));
		Parent root = fxmlLoader.load();

		primaryStage.setTitle("WorkspaceGui");
		Image icon = new Image("sk/digitalsystems/dsutil/workspace/wg/ws.png");
		primaryStage.getIcons().add(icon);

		Scene scene = new Scene(root);
		scene.setOnDragOver(new EventHandler<DragEvent>() {
			@Override
			public void handle(DragEvent event) {
				Dragboard db = event.getDragboard();
				if (db.hasFiles()) {
					event.acceptTransferModes(TransferMode.COPY);
				} else {
					event.consume();
				}
			}
		});

		scene.setOnDragDropped(new EventHandler<DragEvent>() {
			@Override
			public void handle(DragEvent event) {
				Dragboard db = event.getDragboard();
				boolean success = false;
				if (db.hasFiles()) {
					success = true;
					String filePath = null;
					for (File file : db.getFiles()) {
						filePath = file.getAbsolutePath();
						System.out.println(filePath);
						if (file.isFile() && filePath.endsWith("pom.xml")) {
							Alert alert = new Alert(AlertType.CONFIRMATION);
							alert.setContentText("Do you really want to re-generate pom file from: " + filePath);
							alert.setHeaderText(null);
							Optional<ButtonType> result = alert.showAndWait();
							if ((result.isPresent()) && (result.get() == ButtonType.OK)) {
								Controller.doUpdatePomXml(file);
							}
						}
						if (file.isDirectory()) {
							Alert alert = new Alert(AlertType.CONFIRMATION);
							alert.setContentText("Do you really want to delete all contents in path: " + filePath);
							alert.setHeaderText(null);
							Optional<ButtonType> result = alert.showAndWait();
							if ((result.isPresent()) && (result.get() == ButtonType.OK)) {
								try {
								Controller.deletePathFiles(Paths.get(filePath));
								Controller.getInfoAlert("The workspace has been deleted.").showAndWait();
							} catch (Throwable e1) {
								Controller.getWarningAlert("Check if the project exists and is not blocked.", e1).showAndWait();
							}
							}
						}
					}
				}
				event.setDropCompleted(success);
				event.consume();
			}
		});

		primaryStage.setScene(scene);
		primaryStage.show();
		Controller c = fxmlLoader.getController();
		c.init();
	}

	public static void main(String[] args) {
		launch(args);
	}

}
