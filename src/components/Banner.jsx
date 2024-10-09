import React from "react";
import "../components/css/banner.css";
export default function Banner({title1="Activity", title2="Hub"})
{
    return (
        <>
        <div class="banner">
        <div class="banner__text">
          <span>{title1} </span>
          <span>{title2}</span>

        </div>
      </div>
        </>
    )
}