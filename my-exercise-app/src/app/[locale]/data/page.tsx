import AxiosPingButton from "@/components/axios-ping-button";
import AxiosPostButton from "@/components/axios-post-button";
import FetchPostButton from "@/components/fetch-post-button";
import PingButton from "@/components/ping-button";


export default function DataPage() {


  return (
    <div>
      <h1>Data page</h1>
      <br />
          <PingButton /> 
          <br />
          <AxiosPingButton />
          <br />
          <AxiosPostButton />
          <br />
          <FetchPostButton/>
    </div>
  );
}

// fetch(): build in need more boilerplate to set up
// axios(): data is already parse data.data  
