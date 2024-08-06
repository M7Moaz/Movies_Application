import Container from "@/components/Container";
import {
  ExclamationCircleIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "سيري بيست | لم يتم العثور على المحتوى",
    description:
      "لم نتمكن من العثور على المحتوى الذي تبحث عنه. قد يكون الرابط غير صحيح أو أن المحتوى قد أزيل. يرجى العودة إلى الصفحة الرئيسية أو استخدام شريط البحث للعثور على المحتوى الذي تريده.",
  };
}

const NotFound = () => {
  return (
    <Container>
      <section className="bg-white">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-purple-600 rounded-full bg-purple-50">
              <ExclamationCircleIcon className="w-12 h-12" />
            </p>
            <h1 className="mt-3 text-8xl font-bold text-gray-800  md:text-9xl">
              404
            </h1>
            <p className="mt-4 text-gray-500">
              هذه الصفحة غير متوفرة .. ربما قد أخطأت بعنوان الصفحة او تم حذف هذا
              المحتوى يمكنك ابلاغنا اذا كان هناك إي مشكلة.
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
                href={"/"}
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-purple-500 rounded-lg shrink-0 sm:w-auto hover:bg-purple-600"
              >
                ابلغ عن مشكلة{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default NotFound;
