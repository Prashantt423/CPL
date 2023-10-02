const express = require("express");
const playerController = require("../controllers/player-controller");
const authController = require("./../controllers/auth-controllers");
const { upload, resizeImagePlayer } = require("./../utils/image-upload");

const router = express.Router();

router.get(
  "/random",
  authController.isLoggedIn,
  playerController.getRandomPlayer
);
router.get(
  "/:playerType",
  authController.isLoggedIn,
  playerController.getPlayersByType
);
router.post(
  "/add",
  authController.isLoggedIn,
  upload.single("image"),
  resizeImagePlayer,
  playerController.createPlayer
);
router.put(
  "/update/:playerID",
  authController.isLoggedIn,
  upload.single("image"),
  resizeImagePlayer,
  playerController.updatePlayer
);
router.delete(
  "/delete/:playerID",
  authController.isLoggedIn,
  playerController.deletePlayer
);
router.get("/", authController.isLoggedIn, playerController.listAllPlayers);
router.get(
  "/:playerID",
  authController.isLoggedIn,
  playerController.getPlayerById
);

module.exports = router;
