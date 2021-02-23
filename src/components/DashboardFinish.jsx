import React from 'react'
import { Invitation } from '../views'
import Frame from 'react-frame-component'
import { useDispatch } from 'react-redux'
import { sendInvitation } from '../store/action/guest'

const DashboardFinish = () => {
  const dispatch = useDispatch()
  const handleSend = () => {
    dispatch(sendInvitation())
  }

  return (
    <>
      <div className="w-full h-full flex md:flex-row flex-col overflow-y-scroll overflow-x-hidden form-invitation">
      <div className="md:w-1/2 m-3 py-2  max-w-xl  rounded overflow-hidden">
        <h1 className="text-xl bg-gray-800 font-bold text-gray-300 text-center py-3 rounded shadow-lg  ">My Invitation </h1>
        <div className=" max-w-2xl sm:w-xl overflow-y-scroll p-5 w-full  h-full form-invitation">
        {/* <Frame 
          initialContent={html}
          mountTarget='#mountHere'
        >
        </Frame> */}
          {/* <Invitation/> */}
          </div>
        </div>
        <div className="md:w-1/2 m-3 flex justify-center h-full">
          <div className="max-w-xl flex flex-col items-center ">
            <div className="w-full text-center rounded shadow-lg  mt-3 text-gray-800 font-bold text-2xl p-5">Send invitation to all guest
              <div className=" text-sm font-light text-gray-700 p-5">
                <p className="italic">By clicking this button, I agree to send all invitation to the guests and that all guest information is correct.</p>
              </div>
              <button 
                onClick={() => handleSend()}
                className="w-3/4 p-3 font-bold bg-gray-800 rounded-lg text-white text-sm hover:bg-gray-700">Send invitation</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardFinish

const html = 
  `
  <!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Wedding</title>
    <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Cinzel+Decorative:400,700|Lato:400,700'
      rel='stylesheet' type='text/css'>
    <style type="text/css">
      /* EMBEDDED CSS*/

      /* Forces Hotmail to display normal line spacing. */
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }

      body {
        -webkit-text-size-adjust: none;
        -ms-text-size-adjust: none;
      }

      body,
      img,
      div,
      p,
      ul,
      li,
      span,
      strong,
      a {
        margin: 0;
        padding: 0;
      }

      /* Resolves webkit padding issue. */
      table {
        border-spacing: 0;
      }

      table td {
        border-collapse: collapse;
      }

      /****** END BUG FIXES ********/
      /****** END RESETTING DEFAULTS ********/
      body,
      #body_style {
        width: 100% !important;
        color: #333333;
        font-family: 'Lato', sans-serif, Arial, Helvetica;
        font-size: 13px;
        line-height: 1;
      }

      a {
        color: #fb8800;
        text-decoration: none;
        outline: none;
      }

      a:link {
        color: #fb8800;
        text-decoration: none;
      }

      a:visited {
        color: #fb8800;
        text-decoration: none;
      }

      a:hover {
        text-decoration: none !important;
      }

      a[href^="tel"],
      a[href^="sms"] {
        text-decoration: none;
        color: #333333;
        pointer-events: none;
        cursor: default;
      }

      .mobile_link a[href^="tel"],
      .mobile_link a[href^="sms"] {
        text-decoration: default;
        color: #6e5c4f !important;
        pointer-events: auto;
        cursor: default;
      }

      img {
        border: none;
        outline: none;
        text-decoration: none;
        height: auto;
        max-width: 100%;
      }

      a {
        border: none !important;
        outline: none !important;
      }

      table {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      tr,
      td {
        margin: 0;
        padding: 0;
      }

      .add-margin {
        margin-left: -35px;
      }

      .float {
        float: left;
      }

      .img img {
        width: 100%;
      }

      @media only screen and (max-width: 599px) {
        body[yahoo] .ExternalClass {
          width: 100% !important;
        }

        body[yahoo] .img img {
          width: 100%;
        }

        body[yahoo] .word-spacing {
          word-spacing: 0 !important;
        }

        body[yahoo] .letter-spacing {
          letter-spacing: 1px !important;
        }

      }
    </style>

  </head>

  <body
    style="width:100% !important; color:#ffffff; font-family:'Lato', sans-serif, Arial, Helvetica; font-size:13px; line-height:1;"
    alink="#9d470a" link="#9d470a" text="#333333" yahoo="fix">
    <table width="100%" border="0" cellspacing="0" cellspacing="0" align="center">
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" width="600" align="center" class="ExternalClass">

            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="100%"
                  style="background-color:#b3965a; justify-content: center; align-items: center;">
                  <tr>
                    <td height="50"><img border="0" height="1" width="1" alt="" title="" /></td>
                  </tr>
                  <tr>
                    <td
                      style="font-size:30px; color:#ffffff; text-transform: uppercase; text-align:center; font-family: 'Montserrat', sans-serif, Arial, Helvetica; font-weight:700; letter-spacing:7px; word-spacing:1px;"
                      class="letter-spacing">Confirmed</td>
                  </tr>
                  <tr>
                    <td height="30"><img border="0" height="1" width="1" alt="" title="" /></td>
                  </tr>
                  <tr>
                    <td
                      style="font-size:18px; color:#ffffff; text-align:center; font-family: 'Cinzel Decorative', sans-serif, Arial, Helvetica; text-transform: uppercase;  word-spacing:2px; letter-spacing: 6px;"
                      class="letter-spacing">We are happy to know that you will be part of our happy day</td>
                  </tr>
                  <tr>
                  <td height="28"><img border="0" height="1" width="1" alt="" title="" /></td>
                </tr>
            </tr>
            <tr>
              <td height="28"><img border="0" height="1" width="1" alt="" title="" /></td>
            </tr>
            <tr>
              <td
                style="font-size:16px; color:#92763d; font-weight:700; text-align: center; text-transform: uppercase;  word-spacing:4px; letter-spacing: 5px;">
                -Bride & Groom-</td>
            </tr>
            <tr>
              <td height="25"><img border="0" height="1" width="1" alt="" title="" /></td>
            </tr>

          </table>
        </td>
      </tr>

      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" width="100%" border="0">
            <tr>
              <td class="img"><img border="0" src="https://i.imgur.com/T9v6jTF.jpg" alt="" title=""
                  style="display: block;" /></td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" width="100%"
            style="background-color:#212121; justify-content: center; align-items: center;">
            <tr>
              <td height="40"><img border="0" height="1" width="1" alt="" title="" /></td>
            </tr>
            <tr>
              <td
                style="font-size:20px; color:#fff; font-family: 'Montserrat', sans-serif, Arial, Helvetica; font-weight:400; text-align:center; text-transform: uppercase; letter-spacing: 5px;">
                Click the heart below to join us on our happy day</td>
            </tr>
            <tr>
              <td height="30"><img border="0" height="1" width="1" alt="" title="" /></td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#212121;">
            <tr>
              <td height="26"><img border="0" height="1" width="1" alt="" title="" /></td>
            </tr>
            <tr>
              <td
                style="font-size:23px; font-family: 'Montserrat', sans-serif, Arial, Helvetica; font-weight:400; text-align:center; text-transform: uppercase; letter-spacing: 5px; justify-content: center; align-items:center;">>>
                <p style="color:#ffe05d; font-size:40px;" href="baseUrl/event/invitationId"> 💕 </p><<
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#212121;">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="220" align="center" style="text-align:center;">
                  <tr>
                    <td style="text-align:center;" width="44" height="44"><p href="#"><img border="0"
                          src="images/icon-1.png" alt="" title="" /></p></td>
                    <td width="44" height="44" style="text-align:center;"><p href="#"><img border="0"
                          src="images/icon-2.png" alt="" title="" /></p></td>
                    <td width="44" height="44" style="text-align:center;"><p href="#"><img border="0"
                          src="images/icon-3.png" alt="" title="" /></p></td>
                    <td width="44" height="44" style="text-align:center;"><p href="#"><img border="0"
                          src="images/icon-4.png" alt="" title="" /></p></td>

                  </tr>

                </table>
              </td>
            </tr>
            <tr>
              <td height="25"><img border="0" height="1" width="1" alt="" title="" /></td>
            </tr>
            <tr>
              <td
                style="color:#4e4e4e; text-align: center; text-transform:uppercase; font-family: 'Montserrat', sans-serif, Arial, Helvetica; font-weight: 400; letter-spacing:3px; font-size:13px;">
                FURTHER INFORMATION PLEASE CONTACT: <p href="#" style="color:#b3965a;"> +62 1234 1234</p></td>
            </tr>
            <tr>
              <td height="40"><img border="0" height="1" width="1" alt="" title="" /></td>
            </tr>

          </table>
        </td>
      </tr>

    </table>
    </td>
    </tr>

    </table>

  </body>

  </html>
  `
