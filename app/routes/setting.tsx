/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Container, Typography } from "@mui/joy";
import { usePageEffect } from "../core/page";

export const Component = function Messages(): JSX.Element {
  usePageEffect({ title: "Home" });

  return (
    <Container sx={{ py: 2 }}>
      <Typography level="h2" gutterBottom>
        Settings
      </Typography>
      <Typography>Coming soon...</Typography>
    </Container>
  );
};
