#!/usr/bin/env python3
import os

def main():
    # Create screenshots directory if it doesn't exist
    screenshots_dir = "src/Assets/Projects"
    os.makedirs(screenshots_dir, exist_ok=True)
    
    # App store links
    apps = {
        "qshot": {
            "play_store": "https://play.google.com/store/apps/details?id=linkinbio.qshot.com",
            "app_store": "https://apps.apple.com/us/app/qshot-bio-qr-creator/id6587578534"
        },
        "100talks": {
            "play_store": "https://play.google.com/store/apps/details?id=com.talks100.talks100&hl=en",
            "app_store": "https://apps.apple.com/us/app/100-talks/id1611894088"
        },
        "radiolingo": {
            "play_store": "https://play.google.com/store/apps/details?id=org.neronet.learnEnglish100Radio&hl=en",
            "app_store": "https://apps.apple.com/us/app/radiolingo-learn-languages/id1277631223"
        },
        "checkapp": {
            "play_store": "https://play.google.com/store/apps/details?id=com.raysan.check&hl=en",
            "app_store": "https://apps.apple.com/sa/app/checkapp/id1585545105"
        },
        "protocol": {
            "play_store": "https://play.google.com/store/apps/details?id=com.raysan.app.raysan&hl=ar",
            "app_store": "https://apps.apple.com/br/app/protocol/id1639732168?l=en-GB"
        }
    }
    
    print("App Store Screenshot Downloader")
    print("=" * 40)
    print("\nTo get screenshots for your apps, you'll need to:")
    print("1. Visit each app store link")
    print("2. Take screenshots of the app preview images")
    print("3. Save them with the following names:")
    
    for app_name in apps.keys():
        print(f"   - {app_name}.png")
    
    print(f"\nSave the screenshots in: {screenshots_dir}")
    print("\nApp Store Links:")
    for app_name, links in apps.items():
        print(f"\n{app_name.upper()}:")
        print(f"  Play Store: {links['play_store']}")
        print(f"  App Store: {links['app_store']}")

if __name__ == "__main__":
    main()
