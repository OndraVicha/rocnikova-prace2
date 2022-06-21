import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GEOLOGY = gql`
query Geology($id: ID!)
  {
    geology(id:$id){
        data{
          id
          attributes{
            name
            title
            info
            images {
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
`;

export default function GeologyDetail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GEOLOGY, { variables: { id: id } });
    if (loading) return <p>Probíhá načítání stránky...</p>;
    if (error) return <p>Došlo k chybě: {JSON.stringify(error)}</p>;
    const geology = data.geology.data;
    return (
        <Row>
            <Col>
                <h1 class="text-center">
                    {geology.attributes.name}
                </h1>
                <h2>
                    {geology.attributes.title}

                </h2>
                
                <Col>
                
                    {geology.attributes.info}
                    <p></p>
                    
                </Col>
                <Col>
                    {geology.attributes.images.data && (
                        <Figure>
                            <Figure.Image
                                alt={geology.attributes.title}
                                src={`${process.env.REACT_APP_BACKEND_URL}${geology.attributes.images.data.attributes.url}`}
                                rounded
                            />
                        </Figure>
                    )}
                </Col>
            </Col>
        </Row>
    )
}
