import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import "../src/App.css"

const VideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const [videos] = useState([
    'https://media.videoask.com/transcoded/dabd0292-cf99-40ba-a12a-245a279b31dc/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImRhYmQwMjkyLWNmOTktNDBiYS1hMTJhLTI0NWEyNzliMzFkYyIsImV4cCI6MTY3NTI3MDQwNn0.kg_VswyYGF15hbOm1w1V2WqTMU0eYVHoEDV-BnhdUOkJJYrRkMJlWB6p2eOFYoTpde6W9altqf-X74rDoLRqwPNRw6A10WT6T8HPoiudZkGjk38K3K7jQmTOIFefpLmWjpW-YMpyS2MEIF00mmo8JDoWpUGA2x7yzC0KkXL1ye1kWVwcazC9xwBajybBbAlTqabUkMmjliUvR0YGP3Ev_yoebApAkz62-qZlmcq8ThMc2PrZaxm7kINof_PC13ZBUVm194KtgynjZArlNDw5-Y2G-lX5f8-8m0BzXfAw8Z9nCyhPSVhwlWTxI3saGWfHNjoPXcg3zdqsluQi34KWLbDBwKEDgMBFKwsDjsakup_sX9OXI0y7pWTQiUCCeCLmZdCrwqmmM5L_ZSVuB8F5-fbEcjRtrN24RnPNF1mx7sNNLNNdcvOmRd5Wzf5Xy7C-ufTehN2ueJfW2x5S4WQZSkCAMo5QhClFZjVcyKYpQ6FwzOjsMFXlVhzZSdFsYX_xNMnpEiblU8C95ef932IN2nx1qJP7YiHeylAiW1KynUMejx_ZwRbwlwNPTKjiNlEs6EZPcZYo2wsG1T-pcpDL4JvDjQMyOjwEp59BjUu_uw9OP_ymUqJq8W0MRyYdNGRVWxC13wQmcvCoUdiGfI1SbBe-l5FRUSw6H6Jrxy8_lDs',
    'https://media.videoask.com/transcoded/435ae671-33f0-45a4-b958-62402c2b6133/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6IjQzNWFlNjcxLTMzZjAtNDVhNC1iOTU4LTYyNDAyYzJiNjEzMyIsImV4cCI6MTY3NTI3MDQwNX0.ESPtlWe-UGTl-2IWIOx2e2sEpgSDb5gYD013JtmezdMGQJ64PE9rzsIm0tKErnQtEXpdoTu3rdgacowMZCrmyh8sYnz7rJj1yrjoqLd0iyFBNMxGEETXnfK2-RbMuUlPealDbGfkyuNshFWtvdY2MSFzFX0DsQvKcuHEhc8LF3w_a0eL4ABVabBJpnBFItf2uAVv1lTAd8g9n4St1XeV8ERFoSMuELXLNU1WDUachSwTRiYUE_-JH8UWNFMFY-n0vWXZ8f1kVFVG7qygQ7fsCgy-gLMRCakyWxIvP-55-t8eeJ4OysAaSNJFk9CccQ4o0AyNWduNI4O-6sn8lwGYUQu0u-udt0ndRA-H-JgoHf8Bl57E18jvo4x-GyQ2uC5QFRa4-m43quXxG-Nkyrvr_h-_hBadwddO1H40Fie96N4h9g5u_X7X86pwSD38iN0SPvhkskQjW66fmsaJ-Kvi5X1O6yDbw7Qszt5ycUpYmlNgfaIHovttow7pQT1nDNDhCbLevQB5qlEaPlg1yj9-yaYnp2ddhBBKgby1vc9wfVjK03Nctw-DQTbqVdkFjsRhne-28TAzL1K86wOXk6WNYLdHbwYyiD2B8ofVUGXSeEXzISIC59CMz9wLjH28tRxUG04UxckCJE0vvGwSvWj6lkmC3nRW6A1KW73GCZ4HBLk',
    'https://media.videoask.com/transcoded/e8762b7e-7699-495d-a72c-24ea32902eea/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImU4NzYyYjdlLTc2OTktNDk1ZC1hNzJjLTI0ZWEzMjkwMmVlYSIsImV4cCI6MTY3NTI3MDQwNn0.c0oOz1YBTWdnX-wissu2c2tOtGBgFl391cYMNA-NKaFpjZ1r2IY22qUMfwOerX6x3H0BGeaZbnr-7VmRDzPgK4h7MrSetNI4KzHHA1-p2PPmxejpXCJq9jeYHMRgOw2ydHMx-nZp18KucQ6XM_c_r_8CdUzktZaOZNTmo-FdSkcQ-fJIJO7SefGycluAkvLOYhPt6Tc7WS0wQIjAfE4dgvplmin2uGAww1be_a16tYkoBpBurGbRzQcHOjppi1h7y8Dhr5dUAYTUw4MrLYYim5kjaWjwvZOho2quuYK10a6JkaHL56aIQIWnh1QpJLTigqaDl7VpzQlBsi6DwvRIy54Szn6C8x7xqKWd-Wos_w06b7poynY1s5lFhhj4d-VohGt2BUsAYv5gR4ca8pp1-qzazPQOwtw_rQQ227GoUsCru63EuedHTJbyUAvbchnCjpZmifJfFJiAUIwVcKtuTwbWwE9omffud5qid1XxUknHwkt4qbRhdeDudwOKIMIIzNJY6Hdskf6KuWe91MDlPcMu1DP2iVG6MmcpRdZh_cWuJFixQ2Azpl4j_JX6YaBdx4fToKb6qn6UDmprgi5qoqyLH4sVSLSdrgzsoBqFEUcgxy5uwcOETiJTQUkwML5grbluwBEKj-AYp0eFX4nc0JNNJfNHptqrKlDHFhxvasU',
  ])
  const [videoButtons] = useState([
    { label: 'A. Campaign Structure', nextVideo: 0 },
    { label: 'B. Learn Facebook Basics', nextVideo: 1 },
    { label: 'C. 3rd Choice', nextVideo: 2 },
  ])
  const buttonStyle = {
    backgroundColor: 'rgb(125, 0, 254)',fontSize: '20px',
    color: 'white',
    padding: '20px 40px',
    borderRadius: '28px',
    borderColor: 'white',
    width:'300px',
    display: 'flex',
    flexDirection: 'column',
    margin: '15px',  
    paddingLeft:'10px'
  }

  const handleButtonClick = (nextVideo) => {
    setCurrentVideo(nextVideo)
  }

  return (
    <div >
      <div className='video-player-container'>
        <ReactPlayer url={videos[currentVideo]} controls={true}   />
      </div>
      <div className='button-container '>
        {videoButtons.map((button, index) => (
          <button style={buttonStyle} key={index} onClick={() => handleButtonClick(button.nextVideo)}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default VideoPlayer
