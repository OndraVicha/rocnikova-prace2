import React from "react";
import { Container, Row, Col, Alert, Figure, Button } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";

const HISTORIES = gql`
query Histories
  {
    histories {
      data {
        id
        attributes {
          name
          info
          images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const HistoryGrid = () => {
  const { loading, error, data } = useQuery(HISTORIES);
  if (loading) return <p>Probíhá načítání stránky...</p>;
  if (error) return (
    <Container>
      <Alert variant="danger">Došlo k chybě: {JSON.stringify(error)}</Alert>
    </Container>
  );
  if (data.histories.data.length > 0)
    return (
      <Container fluid>
        <Row sm={1} md={2} lg={3}>
          {data.histories.data.map((history) => (
            <Col key={history.id}>
              <div className="border p-2 m-2">
                <h3>{history.attributes.name}</h3>
                <div class="container">
                <p>{history.attributes.info.substring(0, 100)}...</p>  
                <Button
                  variant="outline-primary"
                  href={`/histories/${history.id}`}
                >
                  Podrobnosti
                </Button>
              </div>
              
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
    else
    return (
      <Container>
        <Alert variant="warning">Nebyl nalezen žádný článek</Alert>
      </Container>
    );
};