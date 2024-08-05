export async function generateMetadata() {
  return {
    title: "سيري بيست | لم يتم العثور على المحتوى",
    description:
      "لم نتمكن من العثور على المحتوى الذي تبحث عنه. قد يكون الرابط غير صحيح أو أن المحتوى قد أزيل. يرجى العودة إلى الصفحة الرئيسية أو استخدام شريط البحث للعثور على المحتوى الذي تريده.",
  };
}

const NotFound = () => {
  return <div>NotFound</div>;
};

export default NotFound;
