<?php

/*************************************
                Functions
*************************************/

// Test whether URL code is already in use or not
function isUnusedCode($testCode, $_this) {
    // Create and execute query to get all codes in database
    $get_all_codes_query = "SELECT * 
                            FROM links
                            WHERE code = :code";

    $stmt = $_this->db->prepare($get_all_codes_query);
    $stmt->bindParam("code", $testCode);

    try {
        $stmt->execute();
        $code = $stmt->fetchObject();
    } catch (Exception $e) {
        return $_this->response->withJson($e);
    }

    if($code == NULL) {
        return true;
    } else {
        return false;
    }
}

/*************************************
                Routes
*************************************/

/*
// Default Slim route
$app->get('/[{name}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});*/

// Return all URLs
$app->get('/urls', function ($request, $response, $args) {

    $get_urls_sql = "SELECT * 
                     FROM links";
    $stmt = $this->db->prepare($get_urls_sql);

    try {
        $stmt->execute();
        $urls = $stmt->fetchAll();
    } catch (Exception $e) {
        return $this->response->withJson($e);
    }

    return $this->response->withJson($urls);

});

// Add new short URL to database
$app->post('/url', function ($request, $response, $args) {

    $input = $request->getParsedBody();

    // Test if long URL is already in database
    $existing_urls_query = "SELECT code 
                            FROM links 
                            WHERE long_url = :long_url";

    $stmt = $this->db->prepare($existing_urls_query);
    $stmt->bindParam("long_url", $input['long_url']);

    try {
        $stmt->execute();
        $code = $stmt->fetchObject();
    } catch (Exception $e) {
        return $this->response->withJson($e);
    }

    // Get current datetime
    $currentDateTime = date('Y-m-d H:i:s');

    // If URL is new, generate new code
    if($code == NULL) {
        // Generate new URL code
        do {
            $code = substr(md5(microtime()),rand(0,26),3);
        } while (isUnusedCode($code, $this) == false);

        $insert_url_sql = "INSERT INTO links 
                           SET code = :code,
                               long_url = :long_url,
                               date_created = :date_created";
        $stmt = $this->db->prepare($insert_url_sql);
        $stmt->bindParam("code", $code);
        $stmt->bindParam("long_url", $input['long_url']);
        $stmt->bindParam("date_created", $currentDateTime);
    }

    // Update URL, URL is already in database
    else {
        $update_url_sql = "UPDATE links
                           SET date_created = :date_created,
                               visible = 1
                           WHERE code = :code";
        $stmt = $this->db->prepare($update_url_sql);
        $stmt->bindParam("date_created", $currentDateTime);
        $code = $code->code;
        $stmt->bindParam("code", $code);
    }

    try {
        $stmt->execute();
    } catch (Exception $e) {
        return $this->response->withJson($e);
    }

    $return = array(
        "code" => $code,
        "date_created" => $currentDateTime
    );

    return $this->response->withJson($return);

});

// Change the visibility state to hidden
$app->put('/url', function ($request, $response, $args) {

    $input = $request->getParsedBody();

    $set_visible_sql = "UPDATE links
                        SET visible = 0
                        WHERE code = :code";
    
    $stmt = $this->db->prepare($set_visible_sql);
    $stmt->bindParam("code", $input['code']);

    try {
        $stmt->execute();
    } catch (Exception $e) {
        return $this->response->withJson($e);
    }
});