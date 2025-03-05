import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function FriendsList() {
  const [search, setSearch] = useState("");

  const friendsList = [
    {
      name: "Umar Kokhar",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/431247544_122134099682104086_8778326342267386902_n.jpg?stp=dst-jpg_p320x320_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=saDqHqMWlF8Q7kNvgH5c0Jv&_nc_oc=AdgeS51v5BkBtVI5l40WLcpwzWb_jN_iQM0NvvYKeoh2L1s9weByO5pLkif4dY2wab8&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AQfpC_KRwS63TkUUUIveTTO&oh=00_AYDd8pHXnX5zQQlexeYaKe0-wJaSe1-NUK3AcziICBUX-g&oe=67C6560F",
    },
    {
      name: "Tanveer Ahmad",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/468525653_2059814941156588_5262085893120190079_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=kBrWIFQ11_wQ7kNvgH6vltS&_nc_oc=AdinRLOWEsoiRs64G_YUTKraS1sEbDUTPsX8U8t87Bzi8By-YaBfVOLaZcg5HNnFrx0&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYAyR_UF7XDMywUH4P2W36VCIY49rQHYqOWcGCcEnO_FIA&oe=67C65B9E",
    },
    {
      name: "Malik Wali Awan",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/413810273_345910371486376_4411261417532659275_n.jpg?stp=dst-jpg_p320x320_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=AkN_xbkr6WcQ7kNvgFd97Di&_nc_oc=Adi9baVc9Ez4jZPs4harS0gD0-uXaU1Pkc-DYLDeQvo1OS691xWS757Gp0LTAWHRzEg&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYB2TfpB6lLrHMFsvZ43ZCk38i9qMerIFamG03HjhJaE3w&oe=67C65C19",
    },
    {
      name: "Ahmee Malik",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/480510040_487578697738844_148246817873954453_n.jpg?stp=c0.0.669.669a_dst-jpg_s320x320_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=wZrBEpDJy-wQ7kNvgHp9bDP&_nc_oc=AdjzpHNPlyECwSCxNSQWEVU8huF4ZzHM6WpN12Tn1_lmkaQ2tBWaoWko17TyNN3XfJc&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYD0jOVQygbf1X8mMI2736R0ReLLmuOr523KZQxbUSx1yQ&oe=67C67635",
    },
    {
      name: "Ashar Tahir",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/480887919_122210498558235238_2263313342530909036_n.jpg?stp=cp6_dst-jpg_s320x320_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=JacC4y8tJzUQ7kNvgFeZqbJ&_nc_oc=Adg4yZp-g7jmFvFiGND5NwCBglaXL7v8d2uXWzcT4Rdyt5uT1K1JsCiPmc0fPTmoedc&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYAR4E9jysk3G6oPqDVQMGc7DA6wH0IfGMYfdbfhWhDIrA&oe=67C67067",
    },
    {
      name: "Dani Malik",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/472068283_122230725224056106_7176198820551326648_n.jpg?stp=dst-jpg_p320x320_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=-I4R7SnJdBsQ7kNvgHit6LI&_nc_oc=AdiedcH_Jgc6kbu34wHb6RKxmUAU7tt_a_1RplTGFmB5mMz_GuVmsv5O-RADxjptr9c&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYDDnck6KLPAIqm2bs5mdV5jGw5t1usAAOqpcC__ZMO25g&oe=67C661B1",
    },
    {
      name: "Saim Malik",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/477906717_122211590876215980_8484278779277542715_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=vtFaS7BNUxAQ7kNvgEyVUQJ&_nc_oc=AdhX-4qtFigGvC9i4jVol4BFXzNKud5F9KN29xMhglU-wybOIWVcbfGKEPKiyomLDa0&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYC0nNNupoOFRJMSOZCVYyV7RrVXUGIk12UgnWa-7DOsCw&oe=67C67E59",
    },
    {
      name: "Hassan Bhatti",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/480340751_122193657794158635_1601826117700342984_n.jpg?stp=dst-jpg_p320x320_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=LPFgjnGZ8n8Q7kNvgFBMYSK&_nc_oc=AdgKik-6YoAy2nyyBSIqIvz2vJai_cf-myi57W_QOVWLIBrUnCR37h1guem6Z6n5jwo&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYB_-RjhUxHyb1l3y46JkjtzMYMupvGZoZWOAGI0CtUsTw&oe=67C6680D",
    },
    {
      name: "Abdullah Malik",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/434411693_338274822586819_2630562131183661583_n.jpg?stp=dst-jpg_p320x320_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Ff-OONmTNYYQ7kNvgFtuQoe&_nc_oc=Adg6cvsPfoih3VKWpblco3zVIBIw0f75rFRtPT3pzMUL2Anzo4Vd94NQPcUKkJxxBcQ&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYAycEc9H2pUkWA88NUnPJmVITZdbX2W706cgZ7-BZ-XIg&oe=67C674D0",
    },
    {
      name: "Amanullah Awan",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/458375782_911252794277735_678582139692102502_n.jpg?stp=dst-jpg_p240x240_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Mtjcm6zwXMgQ7kNvgGaI3mg&_nc_oc=Adh4D13E7CuJ7qzCro44iiXm9G6lv7tnQe5E_1XIhBVz-bN5ZYSO9jT4nxPT5zJXMtM&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYBj6KGd0ry51MteDNqUalu8oHekswE_9Ey-kiVXW2pN9A&oe=67C6507A",
    },
    {
      name: "Usman Awan",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/408831940_843219460885758_10779153439505046_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=3eThxskpjZ0Q7kNvgE7xe-V&_nc_oc=AdiKzu0xHAM5HXvlvhIauK2V8TuH7PcgAUzotpvWHFV7R8H10XIKKZRt_ho4mjsvjxs&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYCfSvXlfK02u01Ban-oLSPqpy_M_xWpugVW6Z6c8OKZdQ&oe=67C64ABC",
    },
    {
      name: "Qurban Qurba",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/333015423_6055016827869854_2671920185290740625_n.jpg?stp=c0.0.595.595a_dst-jpg_s240x240_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=V8NOfHlRhvIQ7kNvgGhoAc6&_nc_oc=AdjeEyWXf9U2Bt3_m-QEUDNN5WATh7-RCCAdzdyrFnzno05wgYI8f6jgo2wa_F9kjTw&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYBrgARDJ-SoXT8PCAEOImBpdqNl2p80yL7zCr-g4DXJwA&oe=67C67C3A",
    },
    {
      name: "Ahmad Warraich",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/472580902_122189599538160762_8669837304815653504_n.jpg?stp=dst-jpg_p320x320_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=7FnAja1Tta8Q7kNvgH7nJ1z&_nc_oc=AdjQhXJIZvmX7940sNS4Iv0LxW136gjMw64Ijj3PiaoXsLyOKpx2qVT_ymH2Ghn9mfo&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYALidlcsEr7zafG5BiKZ0Jhbgl7T6HZUy8G-RGPYKg55w&oe=67C67345",
    },
    {
      name: "Rana Fiaz",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/467252232_533957409402507_7966932484541516055_n.jpg?stp=dst-jpg_p320x320_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=GuUQ5aX1lkUQ7kNvgGQewgQ&_nc_oc=AdjAbZzY_earEqZ0mQsQGUok8hrjk3hVY41ekt3XmKY_C0fulFCa4PyFMXq9DqJsrBk&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYAJzpF5fXpddpfkt8-v8rIoJV2FuhbMkc0oIemIAyOWMQ&oe=67C64C17",
    },
    {
      name: "Usama Chahal",
      img: "https://scontent.flhe6-1.fna.fbcdn.net/v/t39.30808-1/468980704_619818603714592_3014915335952661306_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=h1VV36aXG8oQ7kNvgEfNDZP&_nc_oc=AdirXBoZLSXG7WaAKKArLGuVZbCbNVq051RXE7-GkX5hPZeYAOLAIT73WR7V8kTZgYA&_nc_zt=24&_nc_ht=scontent.flhe6-1.fna&_nc_gid=AI4yPaAcgBz1Y-yMtYlGL3s&oh=00_AYCpNxZgXtizL_NRUT0Md7ASpBqhICk9KdSQ2OVSHmfzrQ&oe=67C6486A",
    },
  ];

  const filteredFriends = friendsList.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="friendsMain-2">
      <div className="center">
        <div className="searchInput width">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search friends..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="searchBtn">Search</button>
        </div>
      </div>
      <div className="text">
        <h2>People you may know</h2>
      </div>
      <div>
        <div className="cardList">
          {filteredFriends.map((friend, index) => (
            <div className="card" key={index}>
              <img src={friend.img} alt={friend.name} />
              <h2>{friend.name}</h2>
              <button className="btn-1">Add Friend</button>
              <button className="btn-2">Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
