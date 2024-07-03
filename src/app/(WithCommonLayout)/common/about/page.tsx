'use client'
import Image from "next/image";


const About = () => {
    return (
        <>
             <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
            The purpose and mission of a pet adoption application are fundamental in promoting responsible pet ownership, finding forever homes for animals in need, and fostering a community that cares for animal welfare. Below is a comprehensive breakdown of the purpose and mission of such an application:
            </p>
            <p>Facilitate Adoptions: Streamline the process of finding and adopting pets by providing detailed information about available animals, their backgrounds, and their needs.
Promote Animal Welfare: Ensure that pets find loving and permanent homes, reducing the number of animals in shelters and preventing euthanasia.
Educate Potential Owners: Provide educational resources and support for potential adopters to make informed decisions about pet ownership.
Enhance Connectivity: Connect animal shelters, rescue organizations, and potential adopters through a user-friendly platform.
Increase Visibility: Raise awareness about animals available for adoption and the benefits of adopting rather than buying pets.</p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <Image
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                  width={500}
                  height={500}
                />
                <Image
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                  width={500}
                  height={500}
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Alexa
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                  width={500}
                  height={500}
                />
                <Image
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Img"
                  width={500}
                  height={500}
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Olivia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                  width={500}
                  height={500}
                />
                <Image
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                  width={500}
                  height={500}
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Liam
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                  width={500}
                  height={500}
                />
                <Image
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured img"
                  width={500}
                  height={500}
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>

          
        </div>

        <div className="container mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to our pet adoption platform! Our mission is to find loving homes for pets in need and to promote responsible pet ownership.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg text-gray-600">Feel free to reach out to us at any time. We are here to help!</p>
          <ul className="mt-4">
            <li className="text-lg text-gray-800"><strong>Address:</strong> 1234 Pet Lane, Animal City, PA 12345</li>
            <li className="text-lg text-gray-800"><strong>Phone:</strong> (123) 456-7890</li>
            <li className="text-lg text-gray-800"><strong>Email:</strong> contact@petadoption.com</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <p className="text-lg text-gray-600">Stay connected with us through our social media channels:</p>
          <ul className="mt-4 flex space-x-4">
            <li>
              <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbrL7XF9MGlcDaUzbNM407aoGtrDNe49BaAsyUd7-6GckuTYf8vGx9I74ZaoaaAoenyM&usqp=CAU" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbrL7XF9MGlcDaUzbNM407aoGtrDNe49BaAsyUd7-6GckuTYf8vGx9I74ZaoaaAoenyM&usqp=CAU" alt="Facebook" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqIS1Apxx_weDb9mrVdjILbLs7Fs5IV6oVA&s" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-400">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqIS1Apxx_weDb9mrVdjILbLs7Fs5IV6oVA&s" alt="Twitter" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-pink-600">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxg_sNYlKS9DD4fB1y308IU4PgW0c_ovRRyA&s" alt="Instagram" width={40} height={40} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-700">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxg_sNYlKS9DD4fB1y308IU4PgW0c_ovRRyA&s" alt="LinkedIn" width={40} height={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
      </div>
        </>
    );
};

export default About;