import React from "react";
import { Card, Grid, Button } from "tabler-react";

export default props => {
  const { name, details, image, viewDetails } = props;
  const { desc } = (details && details[0]) || {};

  return (
    <Card className="p-1">
      <Grid.Row cards deck>
        <Grid.Col md={2}>
          <img src={image} />
        </Grid.Col>
        <Grid.Col md={7}>
          <strong>{name.trim()}</strong>
          <span style={{ color: "#999" }}>{desc.trim()}</span>
        </Grid.Col>
        <Grid.Col md={3}>
          {viewDetails ? (
            <Button
              color="secondary"
              onClick={() => viewDetails(props)}
              className="mt-5"
            >
              <span>View Details</span>
            </Button>
          ) : null}
        </Grid.Col>
      </Grid.Row>
    </Card>
  );
};
