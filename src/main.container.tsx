import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import MainMenu from "./components/MainMenu"
import ImageSlider from "./components/ImageSlider/ImageSlider"

interface IProps {}

interface IState {
  selectedFolders: string[]
  interval?: number
  maxImages?: number
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

export default class Main extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedFolders: null,
      interval: null,
      maxImages: null,
    }
  }

  onDirselected = (dirs: string[], interval: number, maxImages: number) => {
    this.setState({ selectedFolders: dirs, interval, maxImages })
  }

  returnToMainMenu = () => this.setState({ selectedFolders: null })

  render(): any {
    return (
      <ThemeProvider theme={darkTheme}>
        {this.state.selectedFolders?.length ? (
          <ImageSlider
            folders={this.state.selectedFolders}
            onStop={this.returnToMainMenu}
            interval={this.state.interval}
            maxImages={this.state.maxImages}
          />
        ) : (
          <MainMenu onDirSelected={this.onDirselected} />
        )}
      </ThemeProvider>
    )
  }
}
