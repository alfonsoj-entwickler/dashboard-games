 interface Props {
  params: {
    id: string;
  } 
 }
export default function({params}:Props) {
  const {id} = params;
  return (
    <div className="">
      <h1>Games {id}</h1>
    </div>
  );
}
