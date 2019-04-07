package sk.digitalsystems.dsutil.workspace.wg;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.ButtonType;
import javafx.scene.control.Label;
import javafx.scene.control.TableView;
import javafx.stage.DirectoryChooser;
import javafx.stage.FileChooser;

public class Controller {

	public static String projectsRoot = "";

	@FXML
	private Label lblProjectRoot;

	@FXML
	private TableView<Project> projectsTable;

	@FXML
	public void changeProjectRoot() {
		DirectoryChooser fc = new DirectoryChooser();
		File f = fc.showDialog(null);
		if (f != null && f.exists()) {
			projectsRoot = f.getAbsolutePath();
			lblProjectRoot.setText(projectsRoot);
		}
	}

	@FXML
	public void updatePomXml() {
		FileChooser fc = new FileChooser();
		fc.setInitialDirectory(new File(projectsRoot));
		File f = fc.showOpenDialog(null);
		if (f != null && f.exists()) {
			Optional<ButtonType> result = getConfirmAlert("Do you really want to re-generate pom.xml?").showAndWait();
			if ((result.isPresent()) && (result.get() == ButtonType.OK)) {
				doUpdatePomXml(f);
			}
		}
	}

	public void init() {
		String startPath = new File("").getAbsolutePath();
		lblProjectRoot.setText(startPath);

		projectsRoot = startPath;

//		projectsTable.setItems(FXCollections.observableList(ProjectService.getList()));
//
//		projectsTable.getColumns().get(0).setCellValueFactory(new PropertyValueFactory<>("name"));
//		projectsTable.getColumns().get(1).setCellValueFactory(new PropertyValueFactory<>("wsUrl"));
//		projectsTable.getColumns().get(2).setCellValueFactory(new PropertyValueFactory<>("svnName"));
//
//		ContextMenu contextMenu = new ContextMenu();
//
//		MenuItem downloadMenuItem = new MenuItem("Download");
//		contextMenu.getItems().add(downloadMenuItem);
//		downloadMenuItem.setOnAction(e -> {
//			Project project = projectsTable.getSelectionModel().getSelectedItem();
//			if (!getProjectDir(project).exists()) {
//				getProjectDir(project).mkdir();
//				String svnExport = "svn --non-interactive export " + project.getWsUrl() + "/1ex.bat "
//						+ getProjectFilePath(project, "1ex.bat");
//				try {
//					ProcessBuilder pb = new ProcessBuilder("cmd.exe", "/c", svnExport);
//					pb.start();
//					getInfoAlert("The workspace has been downloaded.").showAndWait();
//				} catch (IOException e1) {
//					getWarningAlert("Downloading workspace failed.", e1).showAndWait();
//				}
//			} else {
//				getInfoAlert("Not created. Project already existed.").showAndWait();
//			}
//		});
//
//		MenuItem updateMenuItem = new MenuItem("Update");
//		contextMenu.getItems().add(updateMenuItem);
//		updateMenuItem.setOnAction(e -> {
//			getInfoAlert("Not implemented.").showAndWait();
//		});
//
//
//		MenuItem deleteMenuItem = new MenuItem("Delete");
//		contextMenu.getItems().add(deleteMenuItem);
//		deleteMenuItem.setOnAction(e -> {
//			Project project = projectsTable.getSelectionModel().getSelectedItem();
//			Optional<ButtonType> result = getConfirmAlert("Do you really want to delete whole workspace?").showAndWait();
//			if ((result.isPresent()) && (result.get() == ButtonType.OK)) {
//				try {
//					deletePathFiles(getProjectPath(project));
//					getInfoAlert("The workspace has been deleted.").showAndWait();
//				} catch (Throwable e1) {
//					getWarningAlert("Check if the project exists and is not blocked.", e1).showAndWait();
//				}
//			}
//		});
//
//		projectsTable.addEventHandler(MouseEvent.MOUSE_CLICKED, new EventHandler<MouseEvent>() {
//			@Override
//			public void handle(MouseEvent t) {
//				if (t.getButton() == MouseButton.SECONDARY) {
//					contextMenu.show(projectsTable, t.getScreenX(), t.getScreenY());
//				}
//			}
//		});
//
//		projectsTable.getSelectionModel().selectedItemProperty().addListener((obs, oldSelection, newSelection) -> {
//
//		});
	}

	static void doUpdatePomXml(File f) {
		List<String> coLines = null;
		try (Stream<String> lines = Files.lines(f.toPath())) {
			coLines = lines.filter(l -> l.startsWith("svn co ")).map(l -> l.replace("svn co ", "")).collect(Collectors.toList());
		} catch (IOException e) {
			getWarningAlert("Error on reading file.", e).showAndWait();
		}

		List<String> newContent = new ArrayList<>();
		try {
			List<String> content = Files.lines(f.toPath()).collect(Collectors.toList());
			for (String line : content) {
				if (line.contains("<profiles>") || line.contains("<modules>") ) {
					break;
				} else {
					newContent.add(line);
				}
			}
		} catch (IOException e) {
			getWarningAlert("Error on reading file.", e).showAndWait();
		}

		try (FileWriter fw = new FileWriter(f, false)) {
			for (String line : newContent) {
				fw.append(line + "\n");
			}
			fw.append("<profiles>\n");
			fw.append("\t<profile>\n");
			fw.append("\t\t<id>checkout</id>\n");
			fw.append("\t\t<build>\n");
			fw.append("\t\t\t<plugins>\n");
			fw.append("\t\t\t\t<plugin>\n");
			fw.append("\t\t\t\t\t<groupId>org.apache.maven.plugins</groupId>\n");
			fw.append("\t\t\t\t\t<artifactId>maven-scm-plugin</artifactId>\n");
			fw.append("\t\t\t\t\t<version>1.11.1</version>\n");
			fw.append("\t\t\t\t\t<executions>\n");
			int i = 1;
			for (String co : coLines) {
				fw.append("\t\t\t\t\t\t\t<execution>\n");
				fw.append("\t\t\t\t\t\t\t\t<id>" + i++ + "</id>\n");
				fw.append("\t\t\t\t\t\t\t\t<phase>validate</phase>\n");
				fw.append("\t\t\t\t\t\t\t\t<configuration>\n");
				fw.append("\t\t\t\t\t\t\t\t\t<connectionUrl>scm:svn:");
				fw.append(co.split(" ")[0] + "</connectionUrl>\n");
				fw.append("\t\t\t\t\t\t\t\t\t<checkoutDirectory>" + co.split(" ")[1] +"</checkoutDirectory>\n");
				fw.append("\t\t\t\t\t\t\t\t</configuration>\n");
				fw.append("\t\t\t\t\t\t\t\t<goals>\n");
				fw.append("\t\t\t\t\t\t\t\t\t<goal>checkout</goal>\n");
				fw.append("\t\t\t\t\t\t\t\t</goals>\n");
				fw.append("\t\t\t\t\t\t\t</execution>\n");
			}
			fw.append("\t\t\t\t</executions>\n");
			fw.append("\t\t\t\t</plugin>\n");
			fw.append("\t\t\t</plugins>\n");
			fw.append("\t\t</build>\n");
			fw.append("\t</profile>\n");
			fw.append("\t\t<id>build</id>\n");
			fw.append("\t\t<modules>\n");
			for (String co : coLines) {
				fw.append("\t\t\t\t<module>" + co.split(" ")[1] + "</module>\n");
			}
			fw.append("\t\t</modules>\n");
			fw.append("\t</profile>\n");
			fw.append("</profiles>\n");
			fw.append("</project>\n");
		} catch (IOException e) {
			e.printStackTrace();
		}
		getInfoAlert("The pom.xml has been re-generated.").showAndWait();
	}

	static void deletePathFiles(Path path) {
		if (path.toFile().isDirectory() && path.toFile().list().length > 0) {
			try (Stream<Path> contentFiles = Files.list(path)) {
				contentFiles.parallel().forEach(p -> deletePathFiles(p));
			} catch (IOException e) {
				throw new RuntimeException(e);
			}
		}
		if (!path.toFile().isDirectory() || path.toFile().list().length == 0) {
			try {
				path.toFile().setWritable(true);
				Files.delete(path);
			} catch (IOException e) {
				throw new RuntimeException(e);
			}
		}
	}

	static Alert getInfoAlert(String info) {
		Alert alert = new Alert(AlertType.INFORMATION);
		alert.setContentText(info);
		alert.setHeaderText(null);
		return alert;
	}

	static Alert getConfirmAlert(String info) {
		Alert alert = new Alert(AlertType.CONFIRMATION);
		alert.setContentText(info);
		alert.setHeaderText(null);
		return alert;
	}

	static Alert getWarningAlert(String info, Throwable e1) {
		Alert alert = new Alert(AlertType.WARNING);
		alert.setTitle("Operation failed");
		alert.setHeaderText(info);
		alert.setContentText(e1.getMessage());
		return alert;
	}

	String getProjectFilePath(Project p, String string) {
		return Paths.get(getProjectDir(p).getAbsolutePath(), string).toFile().getAbsolutePath();
	}

	private File getProjectDir(Project p) {
		File projectDir = getProjectPath(p).toFile();
		return projectDir;
	}

	private Path getProjectPath(Project p) {
		Path projectPath = Paths.get(projectsRoot, p.getSvnName());
		return projectPath;
	}

}
