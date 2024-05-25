"use client";

import { LoaderCircle } from "lucide-react";
import { useTheme } from "next-themes";
import path from "path";
import { useEffect, useRef } from "react";

declare var _flutter: any;

type Props = {
  flutterDir?: string;
};

const FlutterView = ({ flutterDir = "/flutter" }: Props) => {
  const { resolvedTheme: theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const flutterState = useRef<any>(null);

  const onFlutterAppLoaded = (state: any) => {
    flutterState.current = state;
    state.switchTheme(theme == "dark");
  };

  useEffect(() => {
    flutterState.current?.switchTheme(theme == "dark");
  }, [theme]);

  useEffect(() => {
    const target = ref.current;
    let isRendered = true;
    const initFlutterApp = async () => {
      if (!isRendered) return;
      const engineInitializer = await new Promise<any>((resolve) => {
        _flutter.loader.loadEntrypoint({
          entrypointUrl: path.join(flutterDir, "main.dart.js"),
          onEntrypointLoaded: resolve,
        });
      });
      if (!isRendered) return;

      const appRunner = await engineInitializer?.initializeEngine({
        hostElement: target,
        assetBase: flutterDir,
      });
      if (!isRendered) return;

      await appRunner?.runApp();
    };
    initFlutterApp();

    const eventListener = (event: Event) => {
      const state = (event as CustomEvent).detail;
      onFlutterAppLoaded(state);
    };

    target?.addEventListener("flutter-initialized", eventListener, {
      once: true,
    });

    return () => {
      isRendered = false;
      target?.removeEventListener("flutter-initialized", eventListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="w-full flex-1 flex">
      <div className="flex-1 flex items-center justify-center">
        <LoaderCircle className="w-8 h-8 animate-spin" />
      </div>
    </div>
  );
};

export default FlutterView;
