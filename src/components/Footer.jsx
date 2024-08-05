import Container from "./Container";

const Footer = () => {
  return (
    <div className="p-3 mt-10 bg-purple-600 text-center">
      <Container>
        <p className=" text-white">
          جميع الحقوق محفوظة {new Date().getFullYear()} &copy;
          <a
            href="https://moazx.com"
            target="_blank"
            className="px-2 underline py-1 text-blue-400"
          >
            معاذ
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
