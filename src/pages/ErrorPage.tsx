import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <p>
          {isRouteErrorResponse(error)
            ? "Tis page does not exit"
            : "Sorry, an unexpected error occurred"}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
