import React from "react";
import {  Row, Col, Figure } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const HISTORY = gql`
query History($id: ID!)
  {
    history(id:$id){
        data{
          id
          attributes{
            nazev
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
            title5
            info5
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

export default function HistoryDetail (){
    const { id } = useParams();
  const { loading, error, data } = useQuery(HISTORY, { variables: { id: id } });
  if (loading) return <p>Probíhá načítání stránky...</p>;
  if (error) return <p>Došlo k chybě: {JSON.stringify(error)}</p>;
  const history = data.history.data;
  return (
    <Row>
        <h1 class="text-center">
        {history.attributes.nazev}
      </h1>
      <h2>
        {history.attributes.title}
       
      </h2>
      <Col>
          {history.attributes.info}
          <p></p>
      </Col>
      
      <h3>
      {history.attributes.title1}
      </h3>
      <Col>
          {history.attributes.info1}
          <p></p>
      </Col>
      <Col>
        {history.attributes.images.data && (
          <Figure>
            <Figure.Image
              alt={history.attributes.title}
              src={`${process.env.REACT_APP_BACKEND_URL}${history.attributes.images.data.attributes.url}`}
              rounded
            />
          </Figure>
        )}
      </Col>
      <h3>
      {history.attributes.title2}
      </h3>
      <Col>
          {history.attributes.info2}
          <p></p>
      </Col>
      
      <h3>
      {history.attributes.title3}
      </h3>
      <Col>
          {history.attributes.info3}
          <p></p>
      </Col>
      <h3>
      {history.attributes.title4}
      </h3>
      <Col>
          {history.attributes.info4}
          <p></p>
      </Col>
      <h3>
      {history.attributes.title5}
      </h3>
      <Col>
          {history.attributes.info5}
          <p></p>
      </Col>
      
    </Row>
  )
}




