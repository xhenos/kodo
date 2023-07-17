---
description: This page is for when you encounter a problem with a source or the app.
---

# Troubleshooting

### What are some common issues?

<details>

<summary>Java.lang Exception: Failed to bypass Cloudflare</summary>

**Java.lang.Exception: Failed to bypass Cloudflare** means that the source you selected has Cloudflare protection on, refer to the Cloudflare guide to fix it. If the solutions provided do not fix the issue, the source has likely raised the Cloudflare protection level high enough that Tachiyomi is not able to access the site.

</details>

<details>

<summary>HTTP error 403</summary>

Possible reasons for **HTTP error 403**:

* The source you selected has Cloudflare protection on, refer to the Cloudflare guide to fix it.
* The source is down, removed the manga, or banned your IP. Open WebView to check if this is the case.

</details>

<details>

<summary>HTTP error 404</summary>

**HTTP error 404** probably means that the source is down or removed the manga. Open WevView to check if this is the case. Migrate to a different source for this manga if you'd like.

</details>

<details>

<summary>HTTP error 429 (Too Many Requests)</summary>

**HTTP error 429** or **Too Many Requests** means that the source banned your IP address (in most cases, it's temporary) because you could be downloading or reading too fast. We suggest [reporting](https://github.com/tachiyomiorg/tachiyomi-extensions/issues/new/choose) the issue so that a rate limit can be added to prevent IP bans in the future.

</details>

<details>

<summary>HTTP error 5xx</summary>

**HTTP error 5xx** like **500, 502,** and others are server-side errors, and the source you are trying to access has problems on their side. Open the source in WebView and check if the site is down.

</details>

<details>

<summary>HTTP error 1006</summary>

**HTTP error 1006** means that the source has banned your IP address (in most cases, it's temporary).

</details>

<details>

<summary>HTTP error 1020</summary>

**HTTP error 1020** means that you have violated a firewall rule the site owner has put up. This usually means that the site owner has raised the Cloudflare protection level or that the site owner is blocking IPs outside their country.&#x20;

</details>

<details>

<summary>Unable to resolve host / Connection failed / Failed to connect to / timeout / connection reset</summary>

Errors like **Unable to resolve host**, **Connection failed**, **Failed to connect to**, **timeout**, **connection reset** mean that something is preventing you from connecting to the source.

Possible reasons include:

* Your internet connection is not good enough to connect.
* The app does not have access to the internet.
* Your ISP has blocked the site.
* The site is down.

Try the following solutions to fix this issue:

* Enable → → → **DNS over HTTPS**.
* Use a different internet connection (switch to Wi-Fi, a different Wi-Fi network, mobile data or a VPN).
* Reboot your router.

</details>

<details>

<summary>java.security.cert.CertPathValidatorException / Chain validation failed</summary>

**java.security.cert.CertPathValidatorException** or **Chain validation failed** means there is a problem with validating source's sertificate.

* Check if the site's certificate has expired. Use an online service for checking SSL certificates. If the certificate has expired, wait while the site owner to renew it.
* Ensure that you have the right date and time set on your phone.
* Try → → → **Clear cache** and **Clear cookies**.
* Try using a different internet connection (switch to Wi-Fi, a different Wi-Fi network, mobile data or a VPN).
* Try restarting the device.

</details>

<details>

<summary>App not installed</summary>

Refer to this section.

</details>

<details>

<summary>Attempt to invoke virtual method 'com.hippo.unifile...</summary>

The **Attempt to invoke virtual method' com.hippo.unifile...** error can be caused by various reasons, but they all have to do with storage.

* Most commonly, it is caused by full storage. Check to see if your device or SD Card is full.
* Check if **Tachiyomi** has access to the SD card. You can enable it in Android settings for app permissions.
* If you're downloading and this error pops up, that means the app might not be able to access the folder you're trying to download to. This may be because the folder is corrupted or does not exist. Use a file manager to check that the folder(s) exist and every folder in the sequence is available and accessible.
* The drive you're writing to is corrupted. Check using a file manager to see if it is accessible.

</details>

<details>

<summary>Cannot Access SD Card</summary>

The **Cannot Access SD Card** error can sometimes be fixed by changing the location of your downloads to somewhere else and back to the SD card, then restarting the app.

Having a file or folder name that is too long can also cause this issue. Android's file manager does not support filenames longer than 255 characters. If you know the file or folder name that is the culprit, you can connect your SD card to your computer and shorten it. Otherwise, delete the Tachiyomi downloads folder off of the SD Card.

</details>

<details>

<summary>Storage issues with Android 11+</summary>

See [this](troubleshooting.md#undefined) section of the FAQ to learn how Scoped Storage affects Tachiyomi in Android 11+ and how to fix it.

</details>

<details>

<summary>Slow loading</summary>

If any sources are slow, it is likely due to the site being slow, your internet being slow, or a rate limit applied to the source to reduce the load or IP bans.

</details>

<details>

<summary>Reading is laggy</summary>

This is usually due to the images in the chapters being too long or large for the reader to handle. If you turn have **32-bit color** on, try turning it off under More → Settings → Reader. This helps sometimes to free up some RAM being used. To eliminate this issue, find a different source that cuts the chapter into more pieces or downscales the images.

</details>

{% hint style="info" %}
If error-specific instructions didn't help or your error isn't on the list, go through Diagnosis**.**
{% endhint %}

### Diagnosis <a href="#diagnosis" id="diagnosis"></a>

* Verify your extensions are up to date (Browse  → **Extensions**, make sure no extensions have an **Update** button).
* Check if **Tachiyomi** has an update (More  → About then tap **Check for updates**).
* Manually refresh the manga you are having issues with by dragging down.
* Check other manga from the source.
* Verify that [WebView](https://tachiyomi.org/help/guides/troubleshooting/#update-webview) is updated.
* Try opening the manga in WebView. If there is a [Cloudflare](https://tachiyomi.org/help/guides/troubleshooting/#solving-cloudflare-issues) protection, wait for it to load. If there is a [CAPTCHA](https://tachiyomi.org/help/guides/troubleshooting/#solving-cloudflare-issues), solve it and see if it helped.
* Change your internet connection (_switch to Wi-Fi, mobile data, or a VPN, use a "What's my IP" site to confirm your IP has changed_), then try again.
* Ask other users to try the action that gives you the error.
* Check if the source is either down, or is having issues in a browser.
* Press the retry button in the middle of your manga page if one exists.
* Try the following at **More  → Settings  → Advanced**
  * **Clear Cache**
  * **Clear Cookies**
  * **Clear Database**
  * **DNS over HTTPS**
* If your downloads are getting stuck, try deleting the queue and trying again.
* Force close **Tachiyomi** and reopen it.

If any of these solutions help, go to [it only happens to me](troubleshooting.md#it-only-happens-to-me). If it is not just you, go to [everyone is having this problem](troubleshooting.md#everyone-is-having-this-problem).

If none of these solutions help, try asking in our [Discord Server](https://discord.gg/tachiyomi). Check **#status-updates** first to see if your issue is known. State your app version and the source, manga, and chapter with the problem if it is not listed.

#### It only happens to me <a href="#it-only-happens-to-me" id="it-only-happens-to-me"></a>

You may be getting a [Cloudflare](broken-reference) protection, may have been IP-banned, or encountered some other counter-measure that website owners deploy against programs like **Tachiyomi**. If that is the case, there is probably nothing that can be done about that. Some of them (like [Cloudflare](broken-reference)) have to be manually solved, some are temporary (IP bans).

**Workarounds that can lower the chance of it happening again:**

* Don't use downloads with the source.
* Have less manga in the library from the source.

{% hint style="warning" %}
All of the above are very imprecise and fuzzy rules because each site has its own, non-public limits and triggers.
{% endhint %}

#### Everyone is having this problem <a href="#everyone-is-having-this-problem" id="everyone-is-having-this-problem"></a>

If the site is reachable and fully functional then there may be an issue with the extension or app.&#x20;

1. Have a look at open issues [for the app](https://github.com/tachiyomiorg/tachiyomi/issues) and/or [extensions](https://github.com/tachiyomiorg/tachiyomi-extensions/issues).
2. It may have been fixed already, but not released yet, so look at closed issues ([app](https://github.com/tachiyomiorg/tachiyomi/issues?q=is%3Aissue+is%3Aclosed)/[extensions](https://github.com/tachiyomiorg/tachiyomi-extensions/issues?q=is%3Aissue+is%3Aclosed)) issues as well. 1. If you can't find the issue there, open a new one.&#x20;

If the site is not reachable or having issues then all you can do is wait for the site to become functional again.

### Solving the Cloudflare issue <a href="#solving-the-cloudflare-issue" id="solving-the-cloudflare-issue"></a>

**Note that WebView is not the same as using your browser.**

You must solve the **Cloudflare** issue in **WebView**.

**How to open WebView**

1. Go to Browse in the bottom navbar.
2. Press the source you'd like to access.
3. Press the WebView icon.
4. Complete **CAPTCHA** if one is present.
5. Once done, press the _Back Arrow_ at the top left to return.

<figure><img src="../.gitbook/assets/guides_webview-open.jpg" alt=""><figcaption></figcaption></figure>

#### Bypassing Cloudflare looping

Some sources may have more advanced **Cloudflare** protection, which results in infinite loading in **WebView** when trying to bypass **Cloudflare** using the solution above. If you are facing this issue, try the following steps:

1. Go to Browse in the bottom navbar.
2. Press the source you would like to access.
3. Press the WebView icon. Refer to the previous picture.
4. Press the WebView icon and then press Open in Browser.
5. Once done, press the X at the top left and return to the source.
6. Press the WebView icon again.
7. Complete the **CAPTCHA** if one is present.

#### Changing your user agent

A user agent string helps websites identify information about the requester. While some sources have user agent strings set, most rely on the default value set in the app.

1. Go to More in the bottom navbar.
2. Go to Settings → Advanced.
3. Change the **Default user agent string** setting to a different one. [This website](https://www.whatismybrowser.com/guides/the-latest-user-agent/) is a decent reference.
4. Restart the app and try accessing the source again.

### Update WebView <a href="#update-webview" id="update-webview"></a>

To update **WebView**, you need to find what **WebView implementation** is used on your device. In general, default implementation depends on the Android version as follows:

* Android 10.0 and higher - [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview).
* Android from 7.0 to 9.0 - [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
* Android 6.0.1 and lower - [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview).

{% hint style="info" %}
Users of Android 7.0 and higher can also see and change **WebView implementation** in [Developer Options](https://developer.android.com/studio/debug/dev-options).
{% endhint %}

{% hint style="warning" %}
Non-standard implementations like Firefox can lead to Tachiyomi not working correctly or in the worst-case crash. We recommend **WebView implementation** to be set to [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview) or [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome).
{% endhint %}

### Unable to install the app or extensions

Try installing [Split APK Installer](https://play.google.com/store/apps/details?id=com.aefyr.sai) from the Google Play Store, then use it to try and install the affected APK. Split APK Installer will tell you why the APK is uninstallable, or it will install the APK for you. Some common errors are listed below.

<details>

<summary>INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package eu.kanade.tachiyomi signatures do not match the previously installed version; ignoring!</summary>

If Split APK Installer outputs the above error when attempting to install the APK, you are likely installing a official build over an existing **F-Droid** build. The **F-Droid** build has a different signature than the official build, so you must backup your data, uninstall the app, then restore the data in a fresh install.

</details>

<details>

<summary>DISPLAY_NAME column is null</summary>

If Split APK Installer outputs "DISPLAY\_NAME column is null", the APK you have downloaded is corrupted. Some users experience this error multiple times after redownloading the APK, so keep redownloading the APK until it installs correctly.

</details>

<details>

<summary>INSTALL_FAILED_NO_MATCHING_ABIS</summary>

If Split APK Installer outputs "INSTALL\_FAILED\_NO\_MATCHING\_ABIS", the APK you have downloaded is the wrong one for your CPU architecture. Download the correct one or download the universal APK if you are not aware of which CPU architecture your device uses.

</details>

### Getting Logcats and Crash Logs

To dump crash logs following an app crash, go to More → Settings → Advanced → **Dump crash logs**

<figure><img src="../.gitbook/assets/guides_dump-crashlogs.png" alt=""><figcaption></figcaption></figure>

To get device logs if the app is not behaving as expected, record device logs using a [Logcat Reader](https://play.google.com/store/apps/details?id=com.dp.logcatapp).



