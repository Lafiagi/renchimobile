import axios from "../api/requests";
import showToast from "./util";

const getCountries = (setCountries) => {
  axios
    .get("/countries/")
    .then((response) => {
      setCountries(response.data);
    })
    .catch((err) => {
      console.log("An error occured:", err.message);
    });
};

function getCurrencies(setCurrencies) {
  axios
    .get("/currencies/")
    .then((response) => {
      setCurrencies(response.data.results);
    })
    .catch((err) => {
      console.log("An error occured:", err.message);
    });
}

function getRequests(setRequests, token, setisLoading = true) {
  axios
    .get("/exchange_request/", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    })
    .then((response) => {
      setRequests(response.data.results);
      setisLoading(false);
    })
    .catch((err) => {
      setisLoading(false);
      console.log("An error occured:", err.message);
    });
}
function getMyRequests(
  setRequests,
  token,
  setIsloading = true,
  id = undefined
) {
  const endpoint = id ? `/my_request/${id}` : "/my_request/";
  axios
    .get(endpoint, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    })
    .then((response) => {
      setRequests(response.data.results);
      setIsloading(false);
    })
    .catch((err) => {
      setisLoading(false);
      console.log("An error occured:", err.message);
    });
}

function getRequest(setRequests, id, token) {
  axios
    .get(`/exchange_request/${id}/`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    })
    .then((response) => {
      setRequests(response.data);
    })
    .catch((err) => {
      console.log("An error occured:", err.message);
    });
}

function acceptBid(bid, req, token, navigation) {
  axios
    .post(
      `accept_bid/${req.id}/${bid.id}/${1}/`,
      {
        request_id: req.id,
        bid_id: bid.id,
        accept: 1,
      },
      { headers: { Authorization: `Token ${token}` } }
    )
    .then((response) => {
      showToast(
        "success",
        "Offer Accepted",
        "Successfully Accepted the offer"
      );
      navigation.navigate("FundAccountScreen", {
        bid: bid,
        request: req,
      });
    })
    .catch((error) => {
      console.log("There was an error " + error.message);
      showToast(
        "error",
        "Failed to accept",
        "This offer could ot be accepted, please try again"
      );
    });
}

function getBids(setBids, reqId, token) {
  axios
    .get(`/bid/${reqId}/`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    })
    .then((response) => {
      setBids(response.data);
    })
    .catch((err) => {
      console.log("An error occured biddd:", err.message);
    });
}

function getUserBids(setBids, token) {
  console.log("See my token oo", token);
  axios
    .get(`/user_bids/`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    })
    .then((response) => {
      setBids(response.data);
    })
    .catch((err) => {
      console.log("An error occured biddd:", err.message);
    });
}

function getBid(setBid, id, token) {
  axios
    .get(`/bid/${id}/`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    })
    .then((response) => {
      setRequests(response.data.results);
    })
    .catch((err) => {
      console.log("An error occured:", err.message);
    });
}

function getTnxs(setTnx, token) {
  axios
    .get(`/dashboard_data`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        Authorization: `Token ${token}`,
      },
    })
    .then((response) => {
      setTnx(response.data);
    })
    .catch((err) => {
      console.log("An error occured biddd:", err.message);
    });
}

export {
  getCountries,
  getCurrencies,
  getRequests,
  getRequest,
  getBids,
  getBid,
  getTnxs,
  getMyRequests,
  getUserBids,
  acceptBid,
};
