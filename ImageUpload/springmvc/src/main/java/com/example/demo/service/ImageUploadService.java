package com.example.demo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

import java.io.IOException;

@Service
public class ImageUploadService {

    @Value("${rest.api.url}")
    private String restApiUrl;

    private final WebClient webClient;

    public ImageUploadService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.build();
    }

    public String uploadFile(MultipartFile file) {
        if (file.isEmpty()) {
            return "Please select a file to upload.";
        }

        try {
            // Create the URI with the parameters
            UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromHttpUrl(restApiUrl);

            // Build the request
            Mono<String> responseMono = webClient.post()
                    .uri(uriBuilder.toUriString())
                    .body(BodyInserters.fromMultipartData("file", file.getResource()))
                    .retrieve()
                    .bodyToMono(String.class);

            // Retrieve the response
            String response = responseMono.block();

            return response;
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to upload file.";
        }
    }
}