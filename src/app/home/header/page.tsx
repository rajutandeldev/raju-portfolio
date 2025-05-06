export default function header (){
   return (
    <div className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-12">
    <div className="hidden min-h-[100px] rounded-b-lg bg-orange-500 sm:col-span-2 sm:block"></div>
    <div className="min-h-[100px] rounded-b-lg bg-teal-500 sm:col-span-8"></div>
    <div className="hidden min-h-[100px] rounded-b-lg bg-purple-500 sm:col-span-2 sm:block"></div>
  </div>
  
   )
}