# taties-jazzy

Events collections:
- shows (contains all shows including the one displayed on home page)
- masterclasses (contains all masterclasses including the one displayed on home page)
- home-events (contains only two documents with eventCollection and eventId - ID to get in collection)
Data model shows: 
{
    type: string,
    artist: string,
    date: string,
    presentation: string,
    price: number,
    time: number,
    origin: string,
    creation: number,
    inspiration: string,
    imgPath: string
}
Data model masterclasses:
{
    title: string,
    type: string,
    artist: string,
    date: string,
    presentation: string,
    startTime: number,
    endTime: number,
    price: number,
    imgPath: string
}

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
