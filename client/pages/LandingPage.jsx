import { Button, CircularProgress } from "@mui/material";
import { Page, Text } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from "raviger";
import userImg from "../public/userImg.png";
import { useRecoilState } from "recoil";
import { serverKeyAtom } from "../recoilStore/store";
import useFetch from "../hooks/useFetch";

export default function LandingPage() {
  const navigate = useNavigate();
  const [serverKey, setServerKey] = useRecoilState(serverKeyAtom);
  const [isServerKeyValid, setIsServerKeyValid] = useState(false);

  const [bannerData , setBannerData] = useState({
    isVisible : false,
    imageAdjustment : "fill",
    title : "",
    navigate : "none",
    product : [],
    collection : [],
    externalLink : "",
    bannerImg : ""
  })


  const handleInput = (event) => {
    const input = event.target.value;
    setServerKey(input);
    if (input.length === 152) {
      console.log(input, input.length);
      setIsServerKeyValid(true);
    } else {
      setIsServerKeyValid(false);
    }
  };
  const postOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ serverKey: serverKey }),
  };

  const postBannerOption = {
    method: "POST",
    body: bannerData,
  };

  const getServerKey = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  const useDataFetcher = (initialState, url, options) => {
    const [data, setData] = useState(initialState);
    const fetch = useFetch();

    const fetchData = async () => {
      setData("loading...");
      const result = await (await fetch(url, options)).json();
      if ("serverKey" in result) {
        setData(result.serverKey);
      }
    };

    return [data, fetchData];
  };

  const [serverKeyPost, fetchServerKeyPost] = useDataFetcher(
    "",
    "/api/updateServerKey",
    postOptions
  );
  const [responseServerKey, fetchServerKey] = useDataFetcher(
    "",
    "/api/getServerKey",
    getServerKey
  );

  const [bannerDataPost, fetchBannerDataPost] = useDataFetcher(
    "",
    "/api/createBanner",
    postBannerOption
  );

  console.log(bannerDataPost);

  const handleSubmit = () => {
    fetchBannerDataPost();
    // navigate("/templates");
  };

  console.log(bannerDataPost)

  useEffect(() => {
    if (serverKey.length == 0) {
      fetchServerKey();
      setServerKey(responseServerKey);
    }
  }, []);
  useEffect(() => {
    console.log(responseServerKey);
    if (responseServerKey.length === 152 || serverKey.length === 152) {
      navigate("/templates");
    }
  }, [responseServerKey]);


  const handleBannerInput = (e)=>{
    console.log(e.target.value)
    if(e.target.name === "product" || e.target.name === "collection"){
      setBannerData({...bannerData , [e.target.name] : [e.target.value] })
    }
    else{
      setBannerData({...bannerData , [e.target.name] : e.target.value })
    }
  }

  console.log(bannerData)
  return (
    <>
      {serverKey.length === 0 ? (
        <CircularProgress color="inherit" />
      ) : (
        <Page>
          <div className={styles.container}>
            <div className={styles.topHalf}>
              <img src={userImg} alt="userIcon" className={styles.userImg} />
              <Text id={styles.greeting} as="h1" variant="headingMd">
                Hi, Welcome!
              </Text>
            </div>
            <div className={styles.bottomHalf}>
              <Text id={styles.heading} variant="headingMd">
                Please enter your server key
              </Text>

              <input
                onChange={handleInput}
                type="text"
                value={serverKey === "Server key not found" ? "" : serverKey}
                maxLength="152"
                className={styles.serverKeyInput}
                placeholder=" Enter Sever Key"
                size="small"
              ></input>
              <Button
                disabled={!isServerKeyValid}
                id={styles.submitBtn}
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
          <div>
            <label htmlFor="visible">Visible</label>
            <input type="checkbox" name="isVisible" id="visible" onChange={handleBannerInput} />
          </div>
          <div>
            <fieldset>
              <legend>imageAdjustment</legend>
              <label htmlFor="fill">Fill</label>
              <input type="radio" name="imageAdjustment" id="fill" value="fill" defaultChecked onChange={handleBannerInput} />
              <br />
              <label htmlFor="fit">Fit</label>
              <input type="radio" name="imageAdjustment" id="fit" value="fit" onChange={handleBannerInput}/>
              <br />
              <label htmlFor="stretch">Stretch</label>
              <input type="radio" name="imageAdjustment" id="stretch" value="stretch" onChange={handleBannerInput} />
              <br />
            </fieldset>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={handleBannerInput} />
          </div>
          <div>
            <fieldset>
              <legend>Navigate</legend>
              <label htmlFor="none">None</label>
              <input type="radio" name="navigate" id="none" value="none" defaultChecked onChange={handleBannerInput}/>
              <br />
              <label htmlFor="product">Product</label>
              <input type="radio" name="navigate" id="product" value="product" onChange={handleBannerInput}/>
              {bannerData.navigate === "product" && (
                <div>
                  <label htmlFor="products">Prodcut</label>
                  <select name="product" id="products" onChange={handleBannerInput} multiple >
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              )}

              <br />
              <br />
              <label htmlFor="collection">Collection</label>
              <input type="radio" name="navigate" id="collection" value="collection" onChange={handleBannerInput}/>
              {bannerData.navigate === "collection" && (
                <div>
                <label htmlFor="collection">Collections</label>
                <select name="collection" id="collection" onChange={handleBannerInput} multiple>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              )}
              <br />
              <label htmlFor="external_link">External link</label>
              <input type="radio" name="navigate" id="external_link" value="external_link" onChange={handleBannerInput}/>
              {bannerData.navigate === "external_link" && (
               <div>
                  <label for="externalLink">External</label>
                  <input type="text" name="externalLink" id="externalLink" onChange={handleBannerInput} />
               </div>
              )}
              <br />
            </fieldset>
          </div>
          <input type="file" name="bannerImg" onChange={handleBannerInput}/>
        </Page>
      )}
    </>
  );
}
