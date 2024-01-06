import NextAuth from "next-auth/next";
import Spotify from "next-auth/providers/spotify";

const spotify_scopes = [
  "user-read-email", // read access to a user's email address
  "user-read-private", // read access to a user's subscription details (type of user account)

  "user-library-modify", // write/delete access to a user's "Your Music" library
  "user-library-read", // read access to a user's library

  "playlist-read-private", // read access to user's private playlists
  "playlist-read-collaborative", // include collaborative playlists when requesting a user's playlists
  "playlist-modify-private", // write access to a user's private playlists
  "playlist-modify-public", // write access to a user's public playlists
];

export const auth_options = {
  providers: [
    Spotify({
      clientId: process.env.SPOTIFY_ID as string,
      clientSecret: process.env.SPOTIFY_SECRET as string,
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          scope: spotify_scopes.join(" "),
        },
      },
    }),
  ],
};

export const handler = NextAuth(auth_options);

export { handler as GET, handler as POST };
