import React from "react";
import { Container, Row, Col, Alert,  Button } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";

const GEOLOGIES = gql`
query Geologies
  {
    geologies{
        data{
          id
          attributes{
            name
            title
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

export const GeologyGrid = () => {
    const { loading, error, data } = useQuery(GEOLOGIES);
    if (loading) return <p>Probíhá načítání stránky...</p>;
    if (error) return (
        <Container>
            <Alert variant="danger">Došlo k chybě: {JSON.stringify(error)}</Alert>
        </Container>
    );
    if (data.geologies.data.length > 0)
        return (
            <Container fluid>
                <Row sm={1} md={2} lg={3}>
                    {data.geologies.data.map((geology) => (
                        <Col key={geology.id}>
                            <div className="border p-2 m-2">
                                <h3>{geology.attributes.name}</h3>
                                <div class="container">
                                    <p>{geology.attributes.info.substring(0, 100)}...</p>
                                    <Button
                                        variant="outline-primary"
                                        href={`/geologies/${geology.id}`}
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