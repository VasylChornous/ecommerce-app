import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title
          text1={"ABOUT"}
          text2={"US"}
        />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            reprehenderit voluptas itaque repellendus quas incidunt ipsa,
            nostrum vero sequi doloremque voluptatum blanditiis illo at corrupti
            reiciendis dicta, rerum assumenda nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            accusamus sint mollitia, optio tenetur quam vero excepturi maxime
            nihil quidem sequi nulla similique consequuntur enim error quia
            reiciendis aperiam. Ipsam.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quos quia, earum beatae necessitatibus fugiat cumque deserunt,
            blanditiis et vel autem. Numquam ipsa quibusdam consequuntur.
            Expedita aliquid corrupti itaque ipsum!
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title
          text1={"WHY"}
          text2={"CHOOSE US"}
        />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptatum officiis pariatur quam asperiores facere earum quasi
            animi accusantium, officia hic unde molestiae nisi iste deleniti
            dignissimos ipsam harum? Quis?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptatum officiis pariatur quam asperiores facere earum quasi
            animi accusantium, officia hic unde molestiae nisi iste deleniti
            dignissimos ipsam harum? Quis?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptatum officiis pariatur quam asperiores facere earum quasi
            animi accusantium, officia hic unde molestiae nisi iste deleniti
            dignissimos ipsam harum? Quis?
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
