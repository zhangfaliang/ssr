import React from "react";
import Link from "next/link";

function About() {
    return (
      <>
        <ul>
          <li>
            <Link href="/helloUA">
              <a>helloUA</a>
            </Link>
          </li>
          <li>About Us</li>
        </ul>
  
        <h1>About</h1>
        <p>We are a cool company.</p>
      </>
    )
  }
  
  export default About
  