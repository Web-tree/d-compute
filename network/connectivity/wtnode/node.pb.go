// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.17.3
// source: proto/node.proto

package wtnode

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type WebtreeNode struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                  string   `protobuf:"bytes,1,opt,name=Id,proto3" json:"Id,omitempty"`
	PubKey              []byte   `protobuf:"bytes,2,opt,name=PubKey,proto3" json:"PubKey,omitempty"`
	ConnectionType      string   `protobuf:"bytes,3,opt,name=ConnectionType,proto3" json:"ConnectionType,omitempty"`
	ConnectionAddresses [][]byte `protobuf:"bytes,4,rep,name=ConnectionAddresses,proto3" json:"ConnectionAddresses,omitempty"`
	Trust               float32  `protobuf:"fixed32,5,opt,name=Trust,proto3" json:"Trust,omitempty"`
}

func (x *WebtreeNode) Reset() {
	*x = WebtreeNode{}
	if protoimpl.UnsafeEnabled {
		mi := &file_proto_node_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WebtreeNode) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WebtreeNode) ProtoMessage() {}

func (x *WebtreeNode) ProtoReflect() protoreflect.Message {
	mi := &file_proto_node_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WebtreeNode.ProtoReflect.Descriptor instead.
func (*WebtreeNode) Descriptor() ([]byte, []int) {
	return file_proto_node_proto_rawDescGZIP(), []int{0}
}

func (x *WebtreeNode) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *WebtreeNode) GetPubKey() []byte {
	if x != nil {
		return x.PubKey
	}
	return nil
}

func (x *WebtreeNode) GetConnectionType() string {
	if x != nil {
		return x.ConnectionType
	}
	return ""
}

func (x *WebtreeNode) GetConnectionAddresses() [][]byte {
	if x != nil {
		return x.ConnectionAddresses
	}
	return nil
}

func (x *WebtreeNode) GetTrust() float32 {
	if x != nil {
		return x.Trust
	}
	return 0
}

var File_proto_node_proto protoreflect.FileDescriptor

var file_proto_node_proto_rawDesc = []byte{
	0x0a, 0x10, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x6e, 0x6f, 0x64, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x04, 0x6e, 0x6f, 0x64, 0x65, 0x22, 0xa5, 0x01, 0x0a, 0x0b, 0x57, 0x65, 0x62,
	0x74, 0x72, 0x65, 0x65, 0x4e, 0x6f, 0x64, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x49, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x49, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x50, 0x75, 0x62, 0x4b,
	0x65, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x06, 0x50, 0x75, 0x62, 0x4b, 0x65, 0x79,
	0x12, 0x26, 0x0a, 0x0e, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79,
	0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x12, 0x30, 0x0a, 0x13, 0x43, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x65, 0x73, 0x18,
	0x04, 0x20, 0x03, 0x28, 0x0c, 0x52, 0x13, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x65, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x54, 0x72,
	0x75, 0x73, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x02, 0x52, 0x05, 0x54, 0x72, 0x75, 0x73, 0x74,
	0x42, 0x15, 0x5a, 0x13, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x76, 0x69, 0x74, 0x79,
	0x2f, 0x77, 0x74, 0x6e, 0x6f, 0x64, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_proto_node_proto_rawDescOnce sync.Once
	file_proto_node_proto_rawDescData = file_proto_node_proto_rawDesc
)

func file_proto_node_proto_rawDescGZIP() []byte {
	file_proto_node_proto_rawDescOnce.Do(func() {
		file_proto_node_proto_rawDescData = protoimpl.X.CompressGZIP(file_proto_node_proto_rawDescData)
	})
	return file_proto_node_proto_rawDescData
}

var file_proto_node_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_proto_node_proto_goTypes = []interface{}{
	(*WebtreeNode)(nil), // 0: node.WebtreeNode
}
var file_proto_node_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_proto_node_proto_init() }
func file_proto_node_proto_init() {
	if File_proto_node_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_proto_node_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WebtreeNode); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_proto_node_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_proto_node_proto_goTypes,
		DependencyIndexes: file_proto_node_proto_depIdxs,
		MessageInfos:      file_proto_node_proto_msgTypes,
	}.Build()
	File_proto_node_proto = out.File
	file_proto_node_proto_rawDesc = nil
	file_proto_node_proto_goTypes = nil
	file_proto_node_proto_depIdxs = nil
}
