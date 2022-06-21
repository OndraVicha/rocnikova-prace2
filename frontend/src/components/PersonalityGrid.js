import React from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";

const PERSONALITIES = gql`
query Personalities
  {
    personalities{
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

export const PersonalityGrid = () => {
    const { loading, error, data } = useQuery(PERSONALITIES);
    if (loading) return <p>Probíhá načítání stránky...</p>;
    if (error) return (
        <Container>
            <Alert variant="danger">Došlo k chybě: {JSON.stringify(error)}</Alert>
        </Container>
    );
    if (data.personalities.data.length > 0)
        return (
            <Container fluid>
                <Row sm={1} md={2} lg={3}>
                    {data.personalities.data.map((personality) => (
                        <Col key={personality.id}>
                            <div className="border p-2 m-2">
                                <h3>{personality.attributes.name}</h3>
                                <div class="container">
                                    <p>{personality.attributes.info.substring(0, 100)}...</p>
                                    <Button
                                        variant="outline-primary"
                                        href={`/personalities/${personality.id}`}
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

};