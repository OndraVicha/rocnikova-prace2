import React from "react";
import { Container,Row,Col,Figure } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";


const HOMEPAGE = gql`
{
    homepage{
      data{
        id
        attributes{
          about
          image {
            data{
                attributes{
                    url
                }
            }
          }
        }
      }
    }
  }
`

export default function Homepage() {
    const { loading, error, data } = useQuery(HOMEPAGE);
    if (loading) return <p>Probíhá načítání stránky...</p>;
    if (error) return <p>Došlo k chybě: {JSON.stringify(error)}</p>;
    const homepage = data.homepage.data.attributes;
    return (
        <Container>
            <Row>
                <Col>
                {homepage.about}
                </Col>
                <Col>
                {homepage.image.data && (
                    <Figure>
                        <Figure.Image src={`${process.env.REACT_APP_BACKEND_URL}${homepage.image.data.attributes.url}`}/> 
                    </Figure>
                )}
                </Col>
            </Row>
        </Container>
    );
} 