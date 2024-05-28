import React from "react";
import { saveAs } from "file-saver";
import {
  renderToStream,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";

// Fake API call function
const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "Aman Mavai",
        designation: "Full Stack Developer",
        company: "Tech Innovators",
        qrCodeUrl: "https://fake-qr-code-url.com",
      });
    }, 1000);
  });
};

// PDF Component
const MyDocument = ({ data }: { data: any }) => (
  <Document>
    <Page style={styles.body}>
      <View style={styles.section}>
        <Text>Name: {data.name}</Text>
        <Text>Designation: {data.designation}</Text>
        <Text>Company: {data.company}</Text>
        <Text>QR Code: {data.qrCodeUrl}</Text>
      </View>
    </Page>
  </Document>
);

// Styles for the PDF
const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Main Component
const DownloadButton: React.FC = () => {
  const handleDownload = async () => {
    const data = await fetchData();

    const blob = await pdf(<MyDocument data={data} />).toBlob();
    // const blob = new Blob([stream], { type: "application/pdf" });

    saveAs(blob, "download.pdf");
  };

  return <button onClick={handleDownload}>Download PDF</button>;
};

export default DownloadButton;
