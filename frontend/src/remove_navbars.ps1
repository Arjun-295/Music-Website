 = 'c:\Users\ARJUN-029\Desktop\Music_Website\frontend\src\pages'
 = Get-ChildItem -Path  -Filter '*.jsx'

foreach ( in ) {
     = Get-Content .FullName -Raw

    # Remove <Header /> and import Header from '../components/Header';
     =  -replace 'import Header from ''\.\./components/Header'';\r?\n', ''
     =  -replace '<Header />\r?\n', ''

    # Remove <header>...</header> blocks using regex
     = [System.Text.RegularExpressions.Regex]::Replace(, '(?s)<header.*?</header>\r?\n', '')

    # Remove <nav>...</nav> blocks using regex
     = [System.Text.RegularExpressions.Regex]::Replace(, '(?s)<nav.*?</nav>\r?\n', '')

    Set-Content -Path .FullName -Value 
}
