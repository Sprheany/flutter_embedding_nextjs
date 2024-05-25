# flutter_embedding_nextjs

Contains examples of how to embed Flutter in Nextjs

Developed to [https://www.9patch.online](https://www.9patch.online)

Flutter project: [flutter_draw9patch](https://github.com/sprheany/flutter_draw9patch) (Branch: `dev`)

## How to build

### Requirements

```console
$ node -v
v21.7.3

$ flutter --version
Flutter 3.19.6 • channel stable • https://github.com/flutter/flutter.git
Framework • revision 54e66469a9 (5 weeks ago) • 2024-04-17 13:08:03 -0700
Engine • revision c4cd48e186
Tools • Dart 3.3.4 • DevTools 2.31.1
```

If you have flutter in your system, please modify `package.json`'s `prebuild` script to replace `flutter/bin/flutter` with your `flutter` environment variable.

If you don't have flutter in your system, you can install flutter by running the following command.

```console
$ npm run installFlutter
```

### Build the app

First fetch its `npm` dependencies.

```console
$ npm install
```

Then run the `build` script. It will build the Flutter automatically:

```console
$ npm run build

> flutter_draw9patch_webui@0.1.0 prebuild

... Flutter web build output ...

Compiling lib/main.dart for the Web...

> flutter_draw9patch_webui@0.1.0 build
> next build

... Nextjs build output ...

Compiled successfully.
```

## Thanks

- [cra-flutter](https://github.com/p-mazhnik/flutter-embedding/tree/main/cra-flutter)
