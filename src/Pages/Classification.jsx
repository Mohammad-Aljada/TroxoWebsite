import ClassificationList from "../Components/ClassificationList";

export default function Classification() {
  return (
    <div className="ml-10 w-[90%] max-md:ml-0  max-md:w-full">
      <div className="flex flex-col items-end mt-10 max-md:mt-10 max-md:max-w-full">
        <h1 className="text-2xl font-black leading-tight text-gray-800 uppercase">
          متاجر
        </h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-neutral-500">
          <ol className="flex flex-row-reverse">
            <li>الرئيسية</li>
            <li aria-hidden="true">&gt;</li>
            <li>المتاجر</li>
            <li aria-hidden="true">&gt;</li>
            <li aria-current="page">التصنيفات</li>
          </ol>
        </nav>
        <ClassificationList />
      </div>
    </div>
  );
}
