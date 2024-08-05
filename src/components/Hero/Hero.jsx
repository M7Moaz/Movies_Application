import Link from "next/link";
import Container from "../Container";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.bgRound} z-10`} preload="true">
      <Container>
        <div className="px-3 flex flex-col justify-center items-center text-center text-white">
          <h2 className={`font-bold text-xl mt-48 max-w-1/3`}>
            استمتع بأفضل الأفلام في مكان واحد
          </h2>
          <p className="max-w-2xl mt-3">
            مرحبًا بك في موقعنا لمراجعة الأفلام! هنا ستجد مجموعة متنوعة من
            الأفلام الكلاسيكية والحديثة التي تناسب جميع الأذواق. كل مايخطر في
            بالك من تفاصيل ستجدها هنا. مشاهدة ممتعة!{" "}
          </p>
          <Link
            className="mt-3 bg-purple-800 p-2 px-4 rounded-xl hover:bg-purple-400 transition-all"
            href={"/"}
          >
            شاهد الأن
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
