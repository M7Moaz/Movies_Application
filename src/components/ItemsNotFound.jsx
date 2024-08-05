import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const ItemsNotFound = ({ name }) => {
  return (
    <section className="flex items-center p-16 bg-gray-50">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-black">
            <ExclamationTriangleIcon className="text-purple-600 w-52 mx-auto" />
          </h2>
          <p className="text-2xl md:text-3xl ">
            عذراً لم نتمكن من إيجاد: {name}
          </p>
          <p>تحقق من أسم الفلم او المسلسل المطلوب</p>
          <Link
            href="/"
            className="px-8 py-4 text-xl font-semibold rounded transition-all bg-purple-600 text-white hover:bg-purple-500"
          >
            الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ItemsNotFound;
