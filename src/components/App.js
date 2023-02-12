import React from 'react';
import styled from 'styled-components';
import Navbar from './Nav/Navbar';

const Content = styled.div`
  background-color: bisque;
  height: 90vh;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  p {
    margin: 10px;
    padding: 1rem;
  }
`;

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Content className='content'>
        <b>App Content here</b>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nemo enim
          perferendis voluptas? Explicabo dignissimos ducimus veritatis
          aspernatur voluptates! Labore explicabo quos reprehenderit laudantium,
          ipsa reiciendis eum impedit amet. Laborum soluta neque, inventore ex
          voluptate asperiores esse cum cupiditate voluptas perferendis minima
          veniam quaerat ipsum, vel est. Laudantium sed inventore doloremque
          voluptas id animi placeat facilis hic atque quia harum, quibusdam
          quidem at quisquam ipsam excepturi nisi, dolorum, quo expedita illo
          magnam accusamus. Libero officiis, iste commodi adipisci dolorum alias
          impedit, iure esse, id perspiciatis delectus in quo. Quibusdam magnam
          obcaecati omnis ex et autem minima aut odit ipsam ratione architecto,
          quasi aliquid iure fuga distinctio accusantium inventore eaque
          molestias mollitia fugiat! Sint, quasi vel porro excepturi fuga
          praesentium iste? Repellat dolorum exercitationem qui magnam quis
          vitae error, nesciunt iure tenetur perferendis voluptatibus quidem,
          corrupti odio rem laudantium excepturi nostrum id placeat nobis
          accusantium nemo, assumenda eius voluptates. Architecto voluptates
          impedit sint, error eius magnam. Voluptatibus esse facere amet at?
          Eius iure qui voluptatibus impedit facilis, odio porro ea ipsam
          ratione blanditiis eos fugit numquam consequuntur. Deserunt dolor
          illum atque aperiam, ea doloribus voluptas accusamus asperiores,
          nostrum placeat eaque aspernatur esse commodi possimus quaerat
          sapiente? Accusantium laboriosam dolorum minima necessitatibus!
        </p>
      </Content>
    </div>
  );
}
export default App;
