let webView = WKWebView(frame: self.view.frame)
webView.load(URLRequest(url: URL(string: "https://ClanCmd.com")!))
self.view.addSubview(webView)
