"use client";

import Link from "next/link";
import {
  ArrowLongLeftIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export async function generateMetadata() {
  return {
    title: "سيري بيست | صفحة غير موجودة",
    description:
      "عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد يكون الرابط غير صحيح أو أن الصفحة قد أزيلت. يرجى العودة إلى الصفحة الرئيسية أو الإبلاغ عن المشكلة.",
  };
}

const error = () => {
  return (
    <section className="bg-white">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-purple-600 rounded-full bg-purple-50">
            <ExclamationCircleIcon className="w-6 h-6" />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
            لم يتم العثور على الصفحة
          </h1>
          <p className="mt-4 text-gray-500">
            عذراً لم يتم العثور على الصفحة المطلوبة ربما قد أخطأت بعنوان الصفحة
            أو تم حذف هذا المحتوى
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Link
              href={"/"}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-purple-600 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-purple-100"
            >
              <ArrowLongLeftIcon className="w-5 h-5 rtl:rotate-180" />
              <span>الصفحة الرئيسية</span>
            </Link>

            <Link
              href={"/contact"}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-purple-500 rounded-lg shrink-0 sm:w-auto hover:bg-purple-600"
            >
              ابلغ عن مشكلة{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default error;
