import '../CSS/AboutUs.css'; // Ensure the CSS is correctly referenced
import img32 from '../assets/IMG/32.jpg';

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="abo">
          <img src={img32} alt="Background" className="background" />
          <div className="aboutus">
            <h3>About Us</h3>
            <p className="para1">
              Miu Miu is an Italian high fashion womens clothing and accessory brand and a fully owned subsidiary of Prada. It is headed by Miuccia Prada and headquartered in Milan, Italy. Miu Miu was established in 1992 by Miuccia Prada. The name was conceived from Miuccia Pradas family nickname.
            </p>
            <p className="para2">
              In 2020, Miu Miu introduced Upcycled by Miu Miu, a limited collection of vintage dresses from the 1930s through the 1980s that have been tweaked and refashioned. Miu Miu’s Spring 2024 show was chosen as the best of the year at the Impression Awards 2024. In the 2020s, Miu Miu has experienced a renewed interest from a younger customer. 2023 full year sales figures were up by 82% year-over-year.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
