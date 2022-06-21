import React from "react";
import {  Row, Col, Figure } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const PERSONALITY = gql`
query Personality($id: ID!)
  {
    personality(id:$id){
        data{
          id
          attributes{
            name
            title
            info
            title1
            info1
            title2
            info2
            title3
            info3
            title4
            info4
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

export default function PersonalityDetail (){
    const { id } = useParams();
  const { loading, error, data } = useQuery(PERSONALITY, { variables: { id: id } });
  if (loading) return <p>Probíhá načítání stránky...</p>;
  if (error) return <p>Došlo k chybě: {JSON.stringify(error)}</p>;
  const personality = data.personality.data;
  return (
    <Row>
        <h1 class="text-center">
        {personality.attributes.name}
      </h1>
      <h2>
        {personality.attributes.title}
       
      </h2>
      <Col>
          {personality.attributes.info}
          <p></p>
      </Col>
      
      <h3>
      {personality.attributes.title1}
      </h3>
      <Col>
          {personality.attributes.info1}
          <p></p>
      </Col>
      <Col>
        {personality.attributes.images.data && (
          <Figure>
            <Figure.Image
              alt={personality.attributes.title}
              src={`${process.env.REACT_APP_BACKEND_URL}${personality.attributes.images.data.attributes.url}`}
              rounded
            />
          </Figure>
        )}
      </Col>
      <h3>
      {personality.attributes.title2}
      </h3>
      <Col>
          {personality.attributes.info2}
          <p></p>
      </Col>
      
      <h3>
      {personality.attributes.title3}
      </h3>
      <Col>
          {personality.attributes.info3}
          <p></p>
      </Col>
      <h3>
      {personality.attributes.title4}
      </h3>
      <Col>
          {personality.attributes.info4}
          <p></p>
      </Col>
    </Row>
  )
}




