import jwt from "jsonwebtoken";
import Movies from "../models/Movies";
export const addMoviesController = async (req, res, next) => {
  try {
    const extractedToken = req.headers.authorization.split(" ")[1];

    console.log(extractedToken);

    if (!extractedToken && extractedToken.trim() === "") {
      return res
        .status(404)
        .json({ success: false, message: "Token not found" });
    }

    let adminId;

    jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
      if (err) {
        return res
          .status(400)
          .json({ success: false, message: `${err.message}` });
      } else {
        adminId = decrypted.id;
        return;
      }
    });

    const { title, desc, releaseDate, posterUrl, actors, featured } = req.body;

    if (
      (!title && title.trim() === "") ||
      (!desc && desc.trim() === "") ||
      (!releaseDate && releaseDate.trim() === "") ||
      (!posterUrl && posterUrl.trim() === "") ||
      (!actors && actors.trim() === "")
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Inputs" });
    }

    const movie = new Movies({
      title,
      desc,
      releaseDate: new Date(`${releaseDate}`),
      posterUrl,
      actors,
      featured,
      admin: adminId,
    });

    const saveMovie = await movie.save();

    if (!saveMovie) {
      return res
        .status(400)
        .json({ success: false, message: "Somethings is wrong " });
    }
    return res
      .status(201)
      .json({ success: true, message: "Movie Add successfully", movie });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
