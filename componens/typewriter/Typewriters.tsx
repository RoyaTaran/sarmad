'use client'
import Typewriter from "typewriter-effect";

function Typewriters() {
  return (
    <div>
         <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("اولین قدم به سمت سلامتی")
                      .start()
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("درمان تخصصی را با ما تجربه کنید.")
                      .start()
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("امید اینجا زنده است")
                      .pauseFor(500)
                      .start();
                  }}
                  options={{ loop: true }}
                />
    </div>
  );
}

export default Typewriters;
