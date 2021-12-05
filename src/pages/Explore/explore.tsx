import React from 'react';
import Button from "../../component/Button";
import Books from "../../component/Books";
import { images } from "../../images"
import { Head, Page, Section } from "./style"

const Explore: React.FC = () => {

    
    return (
      <Page>
          <Head>
              <h1>Explore</h1>
              <div>
              <input placeholder="Find books"/>
              <img src={images.search} alt="search bar" />
              </div>
          </Head>

          <Section>
              <h3>Popular Now</h3>
              <Button content="Favourite Books"/>
          </Section>

          <div>
              <Books image={images.magic} title="Magic’s Child" author="The Past Is Rising" category="fiction"/>
              <Books image={images.thepast} title="jjjj" author="kkkk" category="kkkkkk"/>
              <Books image={images.cind} title="jjjj" author="kkkk" category="kkkkkk"/>
          </div>

     </Page>

    )
}



export default Explore