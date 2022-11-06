import axios from "axios";

import { MusicState, Screenshot, System, Wallpaper, Game } from "./models";

export default class ControlApi {
    constructor() {
        axios.defaults.baseURL = "http://10.0.0.210:8000"
    }

    // screenshots

    async getScreenshots(): Promise<Screenshot[]> {
        return (await axios.get<Screenshot[]>(`/screenshots`)).data;
    }

    async takeScreenshot(): Promise<Screenshot> {
        return (await axios.post<Screenshot>(`/screenshots`)).data;
    }

    async deleteScreenshot(path: string): Promise<void> {
        await axios.delete(`/screenshots/${path}`);
    }

    // systems

    async getSystems(): Promise<System[]> {
        return (await axios.get<System[]>(`/systems`)).data;
    }

    async launchSystem(id: string): Promise<void> {
        await axios.post(`/systems/${id}`);
    }

    // wallpaper

    async getWallpapers(): Promise<Wallpaper[]> {
        return (await axios.get<Wallpaper[]>(`/wallpaper`)).data;
    }

    async setWallpaper(filename: string): Promise<void> {
        await axios.post(`/wallpaper/${filename}`);
    }

    async deleteWallpaper(filename: string): Promise<void> {
        await axios.delete(`/wallpaper/${filename}`);
    }

    // music

    async getMusicState(): Promise<MusicState> {
        return (await axios.get<MusicState>(`/music`)).data;
    }

    async playMusic(): Promise<void> {
        await axios.post(`/music/play`);
    }

    async stopMusic(): Promise<void> {
        await axios.post(`/music/stop`);
    }

    async nextMusic(): Promise<void> {
        await axios.post(`/music/next`);
    }

    async setMusicPlayback(playback: string): Promise<void> {
        await axios.post(`/music/playback/${playback}`);
    }

    async setMusicPlaylist(playlist: string): Promise<void> {
        await axios.post(`/music/playlist/${playlist}`);
    }

    async getMusicPlaylists(): Promise<string[]> {
        return (await axios.get<string[]>(`/music/playlist`)).data;
    }

    // games

    async searchGames(query: string): Promise<Game[]> {
        if (query.length < 3) {
            return [];
        }
        
        return (await axios.post<Game[]>(`/games/search`, { query })).data;
    }

    async launchGame(path: string): Promise<void> {
        await axios.post(`/games/launch`, { path });
    }
}
