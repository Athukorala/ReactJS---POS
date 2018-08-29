package lk.ijse.pos.controller;
//import org.apache.commons.io.IOUtils;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.nio.file.StandardCopyOption;

@RestController
@RequestMapping("api/v1/upload")
@CrossOrigin
public class ImageUploadController {

    private static String UPLOAD_DIR = "WEB-INF/images";

    @PostMapping("/customer")
    public String uploadCustomerPhoto(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        System.out.println(file);
        System.out.println(request);
        try {

            String orgFileName = file.getOriginalFilename();

            String path = request.getServletContext().getRealPath("") + UPLOAD_DIR + "/customer" + File.separator + orgFileName;
            InputStream inputStream = file.getInputStream();

            saveFile(inputStream, path);
            return orgFileName;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/item")
    public String uploadItemPhoto(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        try {

            String orgFileName = file.getOriginalFilename();

            String path = request.getServletContext().getRealPath("") + UPLOAD_DIR + "/item" + File.separator + orgFileName;
            InputStream inputStream = file.getInputStream();

            saveFile(inputStream, path);
            return orgFileName;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    private void saveFile(InputStream inputStream, String path) {

        File targetFile = new File(path);

        try {
            java.nio.file.Files.copy(
                    inputStream,
                    targetFile.toPath(),
                    StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }


//        IOUtils.closeQuietly(inputStream);
    }
}